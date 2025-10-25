import { NextResponse } from 'next/server';
import { getAllGhosts } from '@/lib/data/ghostbusters/ghosts';
import { Ghost } from '@/types/ghostbusters';

/**
 * GET /api/ghostbusters/entities
 * Returns a list of all ghost entities with their required equipment
 */
export async function GET() {
  try {
    const ghosts: Ghost[] = getAllGhosts();

    return NextResponse.json({
      success: true,
      count: ghosts.length,
      entities: ghosts
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error fetching ghost entities:', error);

    return NextResponse.json({
      error: 'Internal Server Error',
      message: 'Failed to retrieve ghost entities'
    }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
