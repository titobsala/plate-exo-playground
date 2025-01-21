// src/components/editor/plugins/copilot-plugins.tsx
'use client';

import { CopilotPlugin } from '@udecode/plate-ai/react';
import { serializeMdNodes, stripMarkdown } from '@udecode/plate-markdown';
import { GhostText } from '@/components/plate-ui/ghost-text';
import type { TElement } from '@udecode/plate';

export const copilotPlugins = [
 CopilotPlugin.configure(({ api }) => ({
   options: {
     completeOptions: {
       api: '/api/ai/copilot',
       body: {
         system: `You are an advanced AI writing assistant, similar to VSCode Copilot but for general text. Your task is to predict and generate the next part of the text based on the given context.

Rules:
- Continue the text naturally up to the next punctuation mark (., ,, ;, :, ?, or !).
- Maintain style and tone. Don't repeat given text.
- For unclear context, provide the most likely continuation.
- Handle code snippets, lists, or structured text if needed.
- Don't include """ in your response.
- CRITICAL: Always end with a punctuation mark.
- CRITICAL: Avoid starting a new block. Do not use block formatting.
- If no context is provided or you can't generate a continuation, return "0" without explanation.`,
       },
       onFinish: (_, completion) => {
         if (completion === '0') return;
         api.copilot.setBlockSuggestion({
           text: stripMarkdown(completion),
         });
       },
     },
     debounceDelay: 500,
     getPrompt: ({ editor }) => {
       const contextEntry = editor.api.block({ highest: true });
       if (!contextEntry) return '';
       const prompt = serializeMdNodes([contextEntry[0] as TElement]);
       return `Continue the text up to the next punctuation mark:\n"""\n${prompt}\n"""`;
     },
     renderGhostText: GhostText,
   },
 })),
] as const;