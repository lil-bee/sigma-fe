export function parseSimpleMarkdown(content: string): string {
  return (
    content
      // Bold text **text** -> <strong>text</strong>
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // List items dengan - di awal line
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      // Wrap consecutive <li> with <ul>
      .replace(/(<li>.*<\/li>)/gs, (match) => {
        return `<ul class="list-disc pl-6 -space-y-6 text-sm text-gray-600 leading-relaxed">${match}</ul>`;
      })
      // Line breaks \n -> <br>
      .replace(/\n/g, "<br>")
  );
}
