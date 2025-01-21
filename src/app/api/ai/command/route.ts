import type { NextRequest } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import { StreamingTextResponse } from '@/lib/streaming-text-response';

// Adicionando a interface Message
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: NextRequest) {
  const {
    apiKey: key,
    messages,
    model = 'claude-3-opus-20240229',
    system,
  } = await req.json();

  const apiKey = key || process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing Anthropic API key.' },
      { status: 401 }
    );
  }

  const anthropic = new Anthropic({ apiKey });

  try {
    const stream = await anthropic.messages.create({
      model: model,
      max_tokens: 2048,
      messages: messages.map((message: Message) => ({
        role: message.role === 'user' ? 'user' : 'assistant',
        content: message.content
      })),
      system: system,
      stream: true
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process AI request' },
      { status: 500 }
    );
  }
}