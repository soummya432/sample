import "./TransactionHistory.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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

    setTransactions((prev) => [...prev, newTransaction]);

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

        <button
          type="button"
          onClick={handleSubmit}
        >
          Add Transaction
        </button>

        <br />
        <br />

        <Link to="/dashboard">
          Back To Dashboard
        </Link>
      </div>

      <h2 className="counter">
        Total Transactions: {transactions.length}
      </h2>
<div
  style={{
    background:"yellow",
    color:"black",
    padding:"20px",
    margin:"20px"
  }}
>
  TEST BOX
</div>
      <div className="transaction-list">

        {transactions.map((t, index) => (
          <div
            key={index}
            className={
              t.type === "Credit"
                ? "transaction-item credit-card"
                : "transaction-item debit-card"
            }
          >
            <div>
              <h3>{t.item}</h3>
              <p>{t.category}</p>
              <p>{t.date}</p>
            </div>

            <div>
              <h2>₹{t.amount}</h2>
              <p>{t.type}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default TransactionHistory;