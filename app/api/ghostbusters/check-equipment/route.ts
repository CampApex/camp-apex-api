import { NextRequest, NextResponse } from 'next/server';
import { getGhostsByIds, getAllGhosts } from '@/lib/data/ghostbusters/ghosts';
import {
  generateEquipmentReport,
  validateInventory,
  validateEntities
} from '@/lib/utils/ghostbusters/equipmentChecker';
import { EquipmentCheckRequest, ErrorResponse } from '@/types/ghostbusters';

/**
 * POST /api/ghostbusters/check-equipment
 * Compares user's inventory against ghost requirements
 * Returns mission report with capture readiness and missing equipment
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json() as EquipmentCheckRequest;

    // Validate request body
    if (!body || typeof body !== 'object') {
      return NextResponse.json({
        error: 'Bad Request',
        message: 'Request body must be a valid JSON object'
      } as ErrorResponse, {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    const { inventory, entities } = body;

    // Validate inventory
    if (!inventory) {
      return NextResponse.json({
        error: 'Bad Request',
        message: 'Missing required field: inventory'
      } as ErrorResponse, {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    if (!validateInventory(inventory)) {
      return NextResponse.json({
        error: 'Bad Request',
        message: 'Inventory must be an array of strings'
      } as ErrorResponse, {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    // Determine which ghosts to check
    let ghostsToCheck;

    if (entities && entities.length > 0) {
      // Validate entities if provided
      if (!validateEntities(entities)) {
        return NextResponse.json({
          error: 'Bad Request',
          message: 'Entities must be an array of strings'
        } as ErrorResponse, {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        });
      }

      // Get specific ghosts
      ghostsToCheck = getGhostsByIds(entities);

      if (ghostsToCheck.length === 0) {
        return NextResponse.json({
          error: 'Not Found',
          message: 'No valid ghost entities found with the provided IDs'
        } as ErrorResponse, {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          }
        });
      }
    } else {
      // Check all ghosts
      ghostsToCheck = getAllGhosts();
    }

    // Generate equipment report
    const report = generateEquipmentReport(ghostsToCheck, inventory);

    return NextResponse.json({
      success: true,
      ...report
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });

  } catch (error) {
    console.error('Error checking equipment:', error);

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json({
        error: 'Bad Request',
        message: 'Invalid JSON in request body'
      } as ErrorResponse, {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }

    return NextResponse.json({
      error: 'Internal Server Error',
      message: 'Failed to check equipment'
    } as ErrorResponse, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
