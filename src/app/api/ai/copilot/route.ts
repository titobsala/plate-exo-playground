import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    console.log('=== API Request Start ===');
    console.log('Raw request body:', body);

    const { prompt = '', system = '', model = 'claude-3-opus-20240229' } = JSON.parse(body);

    console.log('Parsed request:', {
      promptContent: prompt,
      promptLength: prompt?.length,
      systemContent: system,
      systemLength: system?.length,
      model
    });

    if (!prompt.trim()) {
      console.log('Empty prompt received');
      return NextResponse.json({
        completion: '0'
      });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing Anthropic API key' },
        { status: 401 }
      );
    }

    const anthropic = new Anthropic({ apiKey });
    console.log('Sending to Anthropic:', {
      promptPreview: prompt.substring(0, 100),
      systemPreview: system.substring(0, 100)
    });

    const message = await anthropic.messages.create({
      model,
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt.trim()
        }
      ],
      system: system.trim()
    });

    if (message?.content?.[0]?.type !== 'text') {
      throw new Error('Invalid response from Anthropic');
    }
  
    return NextResponse.json({ completion: message.content[0].text });

  } catch (error: any) {
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      status: error.status,
      response: error.response?.data
    });

    if (error?.status === 400) {
      return NextResponse.json({ completion: '0' });
    }

    return NextResponse.json(
      { error: error.message || 'Failed to process AI request' },
      { status: 500 }
    );
  }
}