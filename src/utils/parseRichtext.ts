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
