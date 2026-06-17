import "./TransactionHistory.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  const [item, setItem] = useState("");
  const [type, setType] = useState("Debit");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!item || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      item,
      type,
      category,
      amount,
      date,
    };

    setTransactions([...transactions, newTransaction]);

    setItem("");
    setType("Debit");
    setCategory("Food");
    setAmount("");
    setDate("");
  };

  return (
    <div id="transaction-page">
      <div className="transaction-card">
        <h1>Transaction History</h1>

        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Debit</option>
          <option>Credit</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Electricity</option>
          <option>Health</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Add Transaction
        </button>

        <br />
        <br />

        <Link to="/dashboard">
          Back To Dashboard
        </Link>
      </div>

      {/* TRANSACTION LIST */}

      <div className="transaction-list">
        {transactions.map((t, index) => (
          <div
            className="transaction-item"
            key={index}
          >
            <h3>{t.item}</h3>

            <p>
              <strong>Type:</strong> {t.type}
            </p>

            <p>
              <strong>Category:</strong> {t.category}
            </p>

            <p>
              <strong>Amount:</strong> ₹{t.amount}
            </p>

            <p>
              <strong>Date:</strong> {t.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionHistory;