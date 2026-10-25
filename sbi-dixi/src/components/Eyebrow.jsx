// "01 ——— THE BRANCH" section label.
export default function Eyebrow({ n, children }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow__n">{n}</span>
      <span className="eyebrow__line" />
      <span className="eyebrow__label">{children}</span>
    </p>
  );
}
