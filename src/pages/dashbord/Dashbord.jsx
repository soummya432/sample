import "./Dashbord.css";

function Dashbord() {
  return (
    <div id="dashbord">

      <div className="header">
        <h1>Budget Tracker</h1>
        <p>Welcome Back 👋</p>
      </div>

      <div className="summary">

        <div className="card">
          <h3>Total Budget</h3>
          <h2>₹25,000</h2>
        </div>

        <div className="card">
          <h3>Total Spent</h3>
          <h2>₹12,540</h2>
        </div>

        <div className="card">
          <h3>Remaining</h3>
          <h2>₹12,460</h2>
        </div>

      </div>

      <div className="transactions">

        <h2>Recent Transactions</h2>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>09-06-2026</td>
              <td>Food</td>
              <td>₹138</td>
            </tr>

            <tr>
              <td>09-06-2026</td>
              <td>Auto</td>
              <td>₹75</td>
            </tr>

            <tr>
              <td>08-06-2026</td>
              <td>Game</td>
              <td>₹50</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Dashbord;