// Full-screen themed background. `photo` is a path inside /public (the director's pictures live in /public/bg).
// If the photo is missing, the dark gradient from app.css is shown instead.
export default function Background({ variant = 'rounds', photo, children }) {
  const style = photo ? { '--photo': `url('${photo}')` } : undefined;
  return (
    <div className={`bg bg--${variant}`} style={style}>
      <div className="bg__fog" />
      <div className="bg__vignette" />
      <div className="bg__scan" />
      <div className="bg__content">{children}</div>
    </div>
  );
}
