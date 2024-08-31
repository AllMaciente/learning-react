import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Minha Página HTML Básica</h1>
      <nav>
        <ul>
          <li className="nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav">
            <Link className="nav-link" to="/about">
              Sobre
            </Link>
          </li>
          <li className="nav">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
