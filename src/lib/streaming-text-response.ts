export class StreamingTextResponse extends Response {
    constructor(streaming: ReadableStream | AsyncIterable<any>) {
      let stream: ReadableStream;
  
      if (streaming instanceof ReadableStream) {
        stream = streaming;
      } else {
        stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of streaming) {
                const text = typeof chunk === 'string' ? chunk : JSON.stringify(chunk);
                controller.enqueue(new TextEncoder().encode(text));
              }
              controller.close();
            } catch (error) {
              controller.error(error);
            }
          },
        });
      }
  
      super(stream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Transfer-Encoding': 'chunked',
        },
      });
    }
  }