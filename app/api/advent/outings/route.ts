import { NextResponse } from 'next/server';
import { getAllOutings } from '@/lib/data/advent/outings';
import { Outing } from '@/types/advent';

/**
 * GET /api/advent/outings
 * Returns a list of all baby outing types with their required diaper bag items
 */
export async function GET() {
  try {
    const outings: Outing[] = getAllOutings();

    return NextResponse.json({
      success: true,
      count: outings.length,
      outings: outings
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error fetching outings:', error);

    return NextResponse.json({
      error: 'Internal Server Error',
      message: 'Failed to retrieve outing data'
    }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
