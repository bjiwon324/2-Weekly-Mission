export function timeAgo(time: string | number): string {
  const toDay: Date = new Date();
  const targetDate: Date = new Date(time);

  const diff: number = toDay.getTime() - targetDate.getTime();
  const seconds: number = Math.floor(diff / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const months: number = Math.floor(days / 30);
  const years: number = Math.floor(months / 12);

  if (seconds < 60) {
    return '1 minute ago';
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (hours <= 1) {
    return '1 hour ago';
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (days <= 1) {
    return '1 day ago';
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (months <= 1) {
    return '1 month ago';
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years <= 1) {
    return '1 year ago';
  } else {
    return `${years} years ago`;
  }
}
