import SummaryCard from "../../components/SummaryCard/SummaryCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import "./Dashboard.css";

const dummyTransactions = [
  { id: "tx1", title: "Office Supplies", amount: 98.45, category: "Business", date: "2026-06-17", type: "expense" },
  { id: "tx2", title: "Monthly Salary", amount: 4200.0, category: "Income", date: "2026-06-16", type: "income" },
  { id: "tx3", title: "Freelance Project", amount: 670.0, category: "Income", date: "2026-06-15", type: "income" },
];

function Dashboard() {
  return (
    <div className="dashboard-page page-shell">
      <div className="dashboard-heading">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Financial control in one place</h2>
          <p className="dashboard-copy">Track spending, manage goals, and review recent activity across your account.</p>
        </div>
      </div>

      <section className="dashboard-summary">
        <SummaryCard title="Total Balance" value="$12,450" delta="+8.4%" variant="primary" />
        <SummaryCard title="Total Income" value="$18,300" delta="+14%" variant="secondary" />
        <SummaryCard title="Total Expenses" value="$5,850" delta="-4.2%" variant="danger" />
        <SummaryCard title="Monthly Savings" value="$3,760" delta="+22%" variant="success" />
      </section>

      <section className="dashboard-grid">
        <article className="activity-panel glass-card">
          <div className="panel-header">
            <h3>Recent Activity</h3>
            <span>Latest 7 transactions</span>
          </div>
          <div className="activity-list">
            {dummyTransactions.map((item) => (
              <ExpenseCard key={item.id} transaction={item} onEdit={() => {}} onDelete={() => {}} />
            ))}
          </div>
        </article>

        <article className="overview-panel glass-card">
          <div className="panel-header">
            <h3>Expense overview</h3>
            <span>Category spending breakdown</span>
          </div>
          <div className="overview-grid">
            <div>
              <p className="overview-label">Savings</p>
              <strong>$3,760</strong>
            </div>
            <div>
              <p className="overview-label">Essential</p>
              <strong>$2,340</strong>
            </div>
            <div>
              <p className="overview-label">Lifestyle</p>
              <strong>$1,120</strong>
            </div>
            <div>
              <p className="overview-label">Utilities</p>
              <strong>$690</strong>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;
