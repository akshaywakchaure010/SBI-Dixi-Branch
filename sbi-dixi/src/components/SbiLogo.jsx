// SBI keyhole mark, drawn as SVG so it stays crisp at any size.
export default function  ({ size = 28, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="State Bank of India"
    >
      <circle cx="50" cy="50" r="50" fill="var(--blue)" />
      <circle cx="50" cy="41" r="11.5" fill="var(--navy)" />
      <path d="M45.2 49 H54.8 L56.6 100 H43.4 Z" fill="var(--navy)" />
    </svg>
  );
}
