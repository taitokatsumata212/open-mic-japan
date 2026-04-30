import { LINE_FRIEND_URL } from "@/lib/constants";

export function LineButton({
  label = "LINE で友だち追加",
  size = "md",
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-3.5 text-base",
  }[size];

  return (
    <a
      href={LINE_FRIEND_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-omj-line hover:bg-omj-line-dark text-white font-medium rounded-md transition-colors ${sizeClasses}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 5.78 2 10.4c0 4.13 3.56 7.6 8.36 8.27.32.07.76.21.87.49.1.25.07.65.03.91l-.14.85c-.04.25-.2.99.86.54 1.06-.45 5.74-3.38 7.83-5.79C21.27 13.79 22 12.18 22 10.4 22 5.78 17.52 2 12 2zM7.84 13.13H5.86c-.29 0-.52-.23-.52-.52V8.65c0-.29.23-.52.52-.52s.52.23.52.52v3.44h1.46c.29 0 .52.23.52.52 0 .29-.23.52-.52.52zm2.05-.52c0 .29-.23.52-.52.52s-.52-.23-.52-.52V8.65c0-.29.23-.52.52-.52s.52.23.52.52v3.96zm4.7 0c0 .22-.14.42-.36.5-.06.02-.12.03-.18.03-.16 0-.32-.07-.42-.21l-2.04-2.78v2.46c0 .29-.23.52-.52.52s-.52-.23-.52-.52V8.65c0-.22.14-.42.36-.5.06-.02.12-.03.18-.03.16 0 .32.07.42.21l2.04 2.78V8.65c0-.29.23-.52.52-.52s.52.23.52.52v3.96zm3.16-2.5c.29 0 .52.23.52.52 0 .29-.23.52-.52.52h-1.46v.94h1.46c.29 0 .52.23.52.52 0 .29-.23.52-.52.52h-1.98c-.29 0-.52-.23-.52-.52V8.65c0-.29.23-.52.52-.52h1.98c.29 0 .52.23.52.52 0 .29-.23.52-.52.52h-1.46v.94h1.46z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
