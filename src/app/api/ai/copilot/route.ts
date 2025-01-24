import { Anthropic } from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
 apiKey: process.env.ANTHROPIC_API_KEY || ''
});

export async function POST(req: Request) {
 try {
   const { prompt, system } = await req.json();
   console.log('Prompt:', prompt);

   const response = await anthropic.messages.create({
     model: 'claude-3-opus-20240229',
     max_tokens: 50,
     messages: [{ role: 'user', content: prompt }],
     system,
     temperature: 0.7
   });

   console.log('Response:', response);

    return Response.json({ completion: response.content });
  } catch (error) {
    console.error('Error details:', error); // Melhorar log
    return Response.json({ error: 'Failed to process AI request' }, { status: 500 });
  }
}