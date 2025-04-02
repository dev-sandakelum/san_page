import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Bypass cache
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
    );
    
    const data = await response.json();
    
    if (!data.items?.length) {
      return NextResponse.json(
        { error: 'Channel not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      count: data.items[0].statistics.subscriberCount
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}