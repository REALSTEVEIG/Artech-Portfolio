import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./navbar.css";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin">Dashboard</Link>
          <button onClick={logout} className="logout-button">Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
