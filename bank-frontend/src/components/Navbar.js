import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Bank System</div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create Account</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link>
        <Link to="/transfer">Transfer</Link>
      </div>
    </nav>
  );
}

export default Navbar;