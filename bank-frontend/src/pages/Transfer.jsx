import { useState } from "react";
import { transfer } from "../services/accountService";

function Transfer() {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    await transfer(fromId, toId, amount);
    alert("Transfer Successful");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Transfer Money</h2>
      <input
        type="text"
        placeholder="From Account ID"
        className="input"
        value={fromId}
        onChange={(e) => setFromId(e.target.value)}
      />
      <input
        type="text"
        placeholder="To Account ID"
        className="input"
        value={toId}
        onChange={(e) => setToId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn" onClick={handleTransfer}>
        Transfer
      </button>
    </div>
  );
}

export default Transfer;