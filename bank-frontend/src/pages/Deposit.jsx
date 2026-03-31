import { useState } from "react";
import { deposit } from "../services/accountService";

function Deposit() {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    await deposit(id, amount);
    alert("Money Deposited");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Deposit Money</h2>
      <input
        type="text"
        placeholder="Account ID"
        className="input"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn" onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  );
}

export default Deposit;