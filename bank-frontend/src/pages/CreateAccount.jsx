import { useState } from "react";
import { createAccount } from "../services/accountService";

function CreateAccount() {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const account = {
      accountHolderName: name,
      balance: balance
    };

    await createAccount(account);
    alert("Account Created");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Initial Balance"
          className="input"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;