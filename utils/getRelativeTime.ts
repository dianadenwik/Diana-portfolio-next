export function getRelativeTime(date: Date, now: Date): string {
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60) return format(diffMinutes, "minute");
  if (diffHours < 24) return format(diffHours, "hour");
  return format(diffDays, "day");
}

function format(value: number, unit: string): string {
  const suffix = value === 1 ? unit : `${unit}s`;
  return `${value} ${suffix} ago`;
}