export function parseBoldSegments(
  text: string
): { text: string; bold: boolean }[] {
  const segments: { text: string; bold: boolean }[] = [];

  const regex = /(<strong>|<b>)(.*?)<\/(strong|b)>/gi;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, , boldText] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      segments.push({
        text: text.slice(lastIndex, matchIndex),
        bold: false,
      });
    }

    segments.push({
      text: boldText,
      bold: true,
    });

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    segments.push({
      text: text.slice(lastIndex),
      bold: false,
    });
  }

  return segments;
}

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
