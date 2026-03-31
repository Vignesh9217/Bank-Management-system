import { useState } from "react";
import { withdraw } from "../services/accountService";

function Withdraw() {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = async () => {
    await withdraw(id, amount);
    alert("Money Withdrawn");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Withdraw Money</h2>
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
      <button className="btn" onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
}

export default Withdraw;