//#region Text formatting functions
/**
 * Formats text as bold markdown.
 * @param text - The text to make bold
 * @returns The text wrapped bold formatting
 */
export function bold(text: string) {
  text = escape(text);
  return `**${text}**`;
}

/**
 * Formats text as italic markdown.
 * @param text - The text to make italic
 * @returns The text wrapped italic formatting
 */
export function italic(text: string) {
  text = escape(text);
  return `*${text}*`;
}

/**
 * Formats text with strikethrough markdown.
 * @param text - The text to apply strikethrough to
 * @returns The text wrapped strikethrough formatting
 */
export function strikethrough(text: string) {
  text = escape(text);
  return `~~${text}~~`;
}

/**
 * Formats text as underlined markdown.
 * @param text - The text to underline
 * @returns The text wrapped underline formatting
 */
export function underline(text: string) {
  text = escape(text);
  return `__${text}__`;
}

/**
 * Formats text as a spoiler markdown.
 * @param text - The text to hide as a spoiler
 * @returns The text wrapped spoiler formatting
 */
export function spoiler(text: string) {
  text = escape(text);
  return `||${text}||`;
}

/**
 * Formats text as a level 1 header markdown.
 * @param text - The text to format as a header
 * @returns The text formatted as a level 1 header
 */
export function h1(text: string) {
  text = escape(text);
  return header(text, 1);
}

/**
 * Formats text as a level 2 header markdown.
 * @param text - The text to format as a header
 * @returns The text formatted as a level 2 header
 */
export function h2(text: string) {
  text = escape(text);
  return header(text, 2);
}

/**
 * Formats text as a level 3 header markdown.
 * @param text - The text to format as a header
 * @returns The text formatted as a level 3 header
 */
export function h3(text: string) {
  text = escape(text);
  return header(text, 3);
}

/**
 * Formats text as subtext (small text) markdown.
 * @param text - The text to format as subtext
 * @returns The text formatted as subtext
 */
export function subtext(text: string) {
  text = escape(text);
  return `-# ${text}`;
}

/**
 * Creates a clickable link markdown.
 * @param text - The display text for the link
 * @param url - The URL the link should point to
 * @returns A formatted Discord link
 */
export function link(text: string, url: string) {
  text = escape(text);
  return `[${text}](${url})`;
}

/**
 * Creates a link that doesn't show an embed preview.
 * @param url - The URL to wrap
 * @returns The URL wrapped to prevent embeds
 */
export function noEmbedLink(url: string) {
  return `<${url}>`;
}

/**
 * Formats text as a quote markdown.
 * @param text - The text to quote
 * @returns The text formatted as a quote
 */
export function quote(text: string) {
  text = escape(text);
  return `> ${text}`;
}

/**
 * Formats text as a block quote markdown.
 * @param text - The text to format as a block quote
 * @returns The text formatted as a block quote
 */
export function blockQuote(text: string) {
  text = escape(text);
  return `>>> ${text}`;
}

/**
 * Creates a bulleted list markdown.
 * @param items - The items to include in the list
 * @returns A formatted bulleted list
 */
export function list(...items: string[]) {
  return items.map((item) => `- ${escape(item)}`).join("\n");
}

/**
 * Creates a numbered list markdown.
 * @param items - The items to include in the list
 * @returns A formatted numbered list
 */
export function numberedList(...items: string[]) {
  return items.map((item, index) => `${index + 1}. ${escape(item)}`).join("\n");
}

/**
 * Formats text as inline code markdown.
 * @param text - The text to format as code
 * @returns The text wrapped in inline code formatting
 */
export function code(text: string) {
  text = escape(text);
  return `\`${text}\``;
}

/**
 * Formats text as a code block markdown.
 * @param text - The text to format as a code block
 * @param language - Optional language for syntax highlighting
 * @returns The text wrapped in code block formatting
 */
export function codeBlock(text: string, language?: string) {
  text = escape(text);

  if (language) {
    return `\`\`\`${language}\n${text}\n\`\`\``;
  }

  return `\`\`\`\n${text}\n\`\`\``;
}
//#endregion

//#region Specialty formatting
/**
 * Formats a user mention.
 * @param userId - The user ID to mention (string or bigint)
 * @returns A formatted user mention
 * @example
 * user("123456789") // returns "<@123456789>"
 */
export function user(userId: string | bigint): string {
  if (typeof userId === "bigint") {
    userId = userId.toString();
  }

  return `<@${userId}>`;
}

/**
 * Formats a channel mention.
 * @param channelId - The channel ID to mention (string or bigint)
 * @returns A formatted channel mention
 * @example
 * channel("123456789") // returns "<#123456789>"
 */
export function channel(channelId: string | bigint): string {
  if (typeof channelId === "bigint") {
    channelId = channelId.toString();
  }

  return `<#${channelId}>`;
}

/**
 * Formats a role mention.
 * @param roleId - The role ID to mention (string or bigint)
 * @returns A formatted role mention
 * @example
 * role("123456789") // returns "<@&123456789>"
 */
export function role(roleId: string | bigint): string {
  if (typeof roleId === "bigint") {
    roleId = roleId.toString();
  }

  return `<@&${roleId}>`;
}

/**
 * Formats an email address to prevent auto-linking.
 * @param email - The email address to format
 * @returns The email wrapped to prevent auto-linking
 * @example
 * email("test@example.com") // returns "<test@example.com>"
 */
export function email(email: string): string {
  return `<${email}>`;
}

/**
 * Formats a phone number to prevent auto-linking.
 * @param phone - The phone number to format
 * @returns The phone number wrapped to prevent auto-linking
 * @example
 * phone("1234567890") // returns "<+1234567890>"
 */
export function phone(phone: string): string {
  return `<+${phone}>`;
}

/**
 * Formats a custom emoji for Discord.
 * @param emojiName - The name of the emoji
 * @param emojiId - The ID of the emoji (string or bigint)
 * @param animated - Whether the emoji is animated (default: false)
 * @returns A formatted custom emoji
 * @example
 * emoji("smile", "123456789") // returns "<:smile:123456789>"
 * emoji("dance", "123456789", true) // returns "<a:dance:123456789>"
 */
export function emoji(
  emojiName: string,
  emojiId: string | bigint,
  animated: boolean = false,
): string {
  if (typeof emojiId === "bigint") {
    emojiId = emojiId.toString();
  }

  return `<${animated ? "a" : ""}:${emojiName}:${emojiId}>`;
}

/**
 * Enum representing different types of guild navigation targets.
 */
export enum GuildNavigation {
  Customize = "customize",
  Browse = "browse",
  Guide = "guide",
  LinkedRoles = "linked-roles",
}

/**
 * Creates a guild navigation link for Discord.
 * @param to - The navigation target (GuildNavigation enum value or string)
 * @returns A formatted guild navigation link
 * @throws {Error} When an invalid guild navigation type is provided
 * @example
 * guildNavigation(GuildNavigation.Browse) // returns "<id:browse>"
 * @example
 * guildNavigation("customize") // returns "<id:customize>"
 */
export function guildNavigation(
  to: GuildNavigation | `${GuildNavigation}`,
): string {
  if (!Object.values(GuildNavigation).includes(to as GuildNavigation)) {
    throw new Error("Invalid guild navigation type");
  }

  return `<id:${to}>`;
}

/**
 * Enum representing different timestamp display styles.
 */
export enum TimestampStyle {
  /** Short time format (e.g., "4:20 PM") */
  ShortTime = "t",
  /** Long time format (e.g., "4:20:30 PM") */
  LongTime = "T",
  /** Short date format (e.g., "20/04/2021") */
  ShortDate = "d",
  /** Long date format (e.g., "20 April 2021") */
  LongDate = "D",
  /** Short date and time format (e.g., "20 April 2021 4:20 PM") */
  ShortDateTime = "f",
  /** Long date and time format (e.g., "Tuesday, 20 April 2021 4:20 PM") */
  LongDateTime = "F",
  /** Relative time format (e.g., "2 months ago") */
  RelativeTime = "R",
}

/**
 * Creates a Discord timestamp that displays in the user's local timezone.
 * @param epoch - The Unix timestamp (as a string)
 * @param style - The display style for the timestamp (default: ShortDateTime)
 * @returns A formatted Discord timestamp
 * @example
 * timestamp("1618953600", TimestampStyle.RelativeTime) // returns "<t:1618953600:R>"
 */
export function timestamp(
  epoch: string,
  style: TimestampStyle | `${TimestampStyle}` = TimestampStyle.ShortDateTime,
): string {
  return `<t:${epoch}:${style}>`;
}
//#endregion

//#region Utility functions
/**
 * Creates a markdown header with the specified level.
 * @param text - The text to format as a header
 * @param level - The header level (1-3)
 * @returns The text formatted as a header
 * @throws {Error} When header level is not between 1 and 3
 */
function header(text: string, level: number = 1): string {
  if (level < 1 || level > 3) {
    throw new Error("Header level must be between 1 and 3");
  }
  return `${"#".repeat(level)} ${text}`;
}

/**
 * Escapes Discord markdown special characters in text.
 * @param text - The text to escape
 * @returns The text with Discord markdown characters escaped
 */
// biome-ignore lint/suspicious/noShadowRestrictedNames: There's no conflict with global `escape` function
function escape(text: string): string {
  if (typeof text !== "string") {
    return "";
  }

  return text.replace(/([*_~])/g, "\\$1");
}
//#endregion
