type WorkVisualProps = {
  tone: string;
  label: string;
};

export function WorkVisual({ tone, label }: WorkVisualProps) {
  return (
    <div className={`work-visual work-visual-${tone}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-strip" />
      <div className="visual-frame">
        <span>{label}</span>
      </div>
    </div>
  );
}
