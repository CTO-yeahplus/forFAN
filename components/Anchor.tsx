export default function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a className="pill" href={href}>
      {label}
    </a>
  );
}
