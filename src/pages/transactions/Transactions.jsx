import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import { transactions as initialTransactions, categories } from "../../utils/mockData";
import "./Transactions.css";

function Transactions() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc");
  const [items, setItems] = useState(initialTransactions);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const normalizedSearch = search.toLowerCase();

    return items
      .filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(normalizedSearch) || item.category.toLowerCase().includes(normalizedSearch);
        const matchesCategory = category === "All" || item.category === category;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "amount") {
          return order === "asc" ? a.amount - b.amount : b.amount - a.amount;
        }
        return order === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      });
  }, [category, items, order, search, sortBy]);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="page-shell transactions-page">
      <div className="transactions-header">
        <div>
          <p className="eyebrow">Transactions</p>
          <h2>Manage your recent activity</h2>
        </div>
        <button type="button" className="primary" onClick={() => navigate("/add-expense")}>
          Add expense
        </button>
      </div>

      <div className="transactions-filters">
        <input type="search" placeholder="Search transactions" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          {categories.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by date</option>
          <option value="amount">Sort by amount</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="desc">Newest first</option>
          <option value="asc">Oldest first</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="transactions-empty glass-card">
          <h3>No transactions found</h3>
          <p>Try updating your filter or add a new expense to see your activity here.</p>
        </div>
      ) : (
        <div className="transactions-list">
          {filtered.map((transaction) => (
            <ExpenseCard key={transaction.id} transaction={transaction} onEdit={(id) => navigate(`/edit-expense/${id}`)} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Transactions;
