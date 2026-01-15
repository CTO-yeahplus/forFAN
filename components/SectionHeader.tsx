export default function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}
