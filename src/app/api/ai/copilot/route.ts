import { Anthropic } from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
 apiKey: process.env.ANTHROPIC_API_KEY || ''
});

export async function POST(req: Request) {
 try {
   const { prompt, system } = await req.json();
   const response = await anthropic.messages.create({
     model: 'claude-3-opus-20240229',
     max_tokens: 50,
     messages: [{ role: 'user', content: prompt }],
     system,
     temperature: 0.7
   });
   return Response.json({ completion: response.content });
 } catch (error) {
   if (error instanceof Error && error.name === 'AbortError') {
     return Response.json(null, { status: 408 });
   }
   return Response.json({ error: 'Failed to process AI request' }, { status: 500 });
 }
}