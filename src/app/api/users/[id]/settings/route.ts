import { NextRequest, NextResponse } from 'next/server';

type Params = { id: string };

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  // In Next.js 13+ App Router, params is a Promise that needs to be awaited
  const { id: userId } = await params;
  
  // Mock response
  return NextResponse.json({ 
    userId,
    settings: {
      theme: 'dark',
      notifications: true
    }
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  // Await params to get the actual parameters
  const { id: userId } = await params;
  const body = await request.json();
  
  // Mock response  
  return NextResponse.json({
    userId,
    settings: body,
    updated: true
  });
}