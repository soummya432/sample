import "./ExpenseCard.css";

function ExpenseCard({ transaction, onEdit, onDelete }) {
  return (
    <article className="expense-card">
      <div className="expense-card-top">
        <div>
          <p>{transaction.title}</p>
          <span className="expense-category">{transaction.category}</span>
        </div>
        <strong className={`expense-amount ${transaction.type === "income" ? "income" : "expense"}`}>
          {transaction.type === "income" ? "+" : "-"}${transaction.amount}
        </strong>
      </div>
      <div className="expense-card-meta">
        <small>{transaction.date}</small>
        <div className="expense-card-actions">
          <button type="button" onClick={() => onEdit(transaction.id)}>
            Edit
          </button>
          <button type="button" className="delete" onClick={() => onDelete(transaction.id)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default ExpenseCard;
