//#region Text formatting functions
export function bold(text: string) {
  text = escape(text);
  return `**${text}**`;
}

export function italic(text: string) {
  text = escape(text);
  return `*${text}*`;
}

export function strikethrough(text: string) {
  text = escape(text);
  return `~~${text}~~`;
}

export function underline(text: string) {
  text = escape(text);
  return `__${text}__`;
}

export function h1(text: string) {
  text = escape(text);
  return header(text, 1);
}

export function h2(text: string) {
  text = escape(text);
  return header(text, 2);
}

export function h3(text: string) {
  text = escape(text);
  return header(text, 3);
}

export function subtext(text: string) {
  text = escape(text);
  return `-# ${text}`;
}

export function link(text: string, url: string) {
  text = escape(text);
  return `[${text}](${url})`;
}

export function quote(text: string) {
  text = escape(text);
  return `> ${text}`;
}

export function list(...items: string[]) {
  return items.map((item) => `- ${escape(item)}`).join("\n");
}

export function numberedList(...items: string[]) {
  return items.map((item, index) => `${index + 1}. ${escape(item)}`).join("\n");
}

export function code(text: string) {
  text = escape(text);
  return `\`${text}\``;
}

export function codeBlock(text: string, language?: string) {
  text = escape(text);

  if (language) {
    return `\`\`\`${language}\n${text}\n\`\`\``;
  }

  return `\`\`\`\n${text}\n\`\`\``;
}
//#endregion

//#region Utility functions
function header(text: string, level: number = 1): string {
  if (level < 1 || level > 3) {
    throw new Error("Header level must be between 1 and 6");
  }
  return `${"#".repeat(level)} ${text}`;
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: There's no conflict with global `escape` function
function escape(text: string): string {
  if (typeof text !== "string") {
    return "";
  }

  return text.replace(/([*_~|\\`>#\-+!.()])/g, "\\$1");
}
//#endregion
