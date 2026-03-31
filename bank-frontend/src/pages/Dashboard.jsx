function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="bank-card">
          <div className="visa">VISA</div>
          <div className="card-number">**** **** **** 1234</div>
          <div className="card-name">John Doe</div>
        </div>
        <div className="transactions">
          <h3>Recent Transactions</h3>
          <div className="transaction">
            <span className="transaction-name">Deposit</span>
            <span className="amount-positive">+$500</span>
          </div>
          <div className="transaction">
            <span className="transaction-name">Withdrawal</span>
            <span className="amount-negative">-$200</span>
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="btn">Deposit</button>
        <button className="btn">Withdraw</button>
        <button className="btn">Transfer</button>
        <button className="btn">Check Balance</button>
      </div>
    </div>
  );
}

export default Dashboard;