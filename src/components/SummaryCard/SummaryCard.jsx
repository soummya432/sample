import "./SummaryCard.css";

function SummaryCard({ title, value, delta, variant }) {
  return (
    <article className={`summary-card summary-${variant}`}>
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
      <span>{delta}</span>
    </article>
  );
}

export default SummaryCard;
