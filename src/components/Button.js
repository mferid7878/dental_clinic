export function Button({ Name, style, link }) {
  return (
    <a href={link} className={style}>
      {Name}
    </a>
  );
}
