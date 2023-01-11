import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export default function formatDate(date: Date | string) {
  const d = date instanceof Date ? date : new Date(date);
  const diff = Date.now() - d.getTime();

  if (diff < 1000 * 60) {
    return "방금 전";
  }

  if (diff < 1000 * 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, "PPP", { locale: ko }); // 날짜 포맷
}
