'use client';

import type { TElement } from '@udecode/plate';
import { CopilotPlugin } from '@udecode/plate-ai/react';
import { serializeMdNodes, stripMarkdown } from '@udecode/plate-markdown';
import { faker } from '@faker-js/faker';
import { GhostText } from '@/components/plate-ui/ghost-text';

export const copilotPlugins = [
  CopilotPlugin.configure(({ api }) => ({
    options: {
      completeOptions: {
        api: '/api/ai/copilot',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          model: 'claude-3-opus-20240229',
          prompt: '',
          system: `You are an advanced AI writing assistant, similar to VSCode Copilot but for general text. Your task is to predict and generate the next part of the text based on the given context.

Rules:
- Continue the text naturally up to the next punctuation mark (., ,, ;, :, ?, or !).
- Maintain style and tone. Don't repeat given text.
- For unclear context, provide the most likely continuation.
- Handle code snippets, lists, or structured text if needed.
- Don't include """ in your response.
- CRITICAL: Always end with a punctuation mark.
- CRITICAL: Avoid starting a new block. Do not use block formatting like >, #, 1., 2., -, etc. The suggestion should continue in the same block as the context.
- If no context is provided or you can't generate a continuation, return "0" without explanation.`
        },
        beforeRequest: (body) => {
          const selectedText = window.getSelection()?.toString() || '';
          console.log('Selected text:', selectedText);
          console.log('Original body:', body);

          const finalPrompt = selectedText || body.prompt || '';
          console.log('Final prompt:', finalPrompt);

          if (!finalPrompt.trim()) {
            console.log('No text selected or provided');
            return null;
          }

          return {
            ...body,
            prompt: finalPrompt.trim(),
            system: body.system.trim()
          };
        },
        onError: (error: any) => {
          console.error('Copilot error:', error);
          if (error?.response?.status === 400) {
            api.copilot.setBlockSuggestion({ text: '' });
            return;
          }
          api.copilot.setBlockSuggestion({
            text: stripMarkdown(faker.lorem.sentence()),
          });
        },
        onFinish: (response, completion) => {
          console.log('Copilot response:', response);
          if (completion === '0' || !completion) {
            api.copilot.setBlockSuggestion({ text: '' });
            return;
          }

          api.copilot.setBlockSuggestion({
            text: stripMarkdown(completion),
          });
        },
      },
      debounceDelay: 500,
      getPrompt: ({ editor }) => {
        const selection = window.getSelection()?.toString();
        if (selection) {
          console.log('Using selection:', selection);
          return selection;
        }

        const contextEntry = editor.api.block({ highest: true });
        if (!contextEntry) return '';
        
        const prompt = serializeMdNodes([contextEntry[0] as TElement]);
        if (!prompt.trim()) return '';
        
        console.log('Using block prompt:', prompt);
        return `Continue the text up to the next punctuation mark:
"""
${prompt}
"""`.trim();
      },
      renderGhostText: GhostText,
    },
  })),
] as const;