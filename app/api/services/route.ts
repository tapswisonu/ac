import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    // We get all services and optionally filter by category slug
    const services = await prisma.service.findMany({
      where: category ? {
        category: {
          slug: category
        }
      } : undefined,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}
