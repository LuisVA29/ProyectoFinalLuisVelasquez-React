import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header-nav">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dfamqux3j/image/upload/v1711258737/logo-dermacenter-1_hd784p.png"
          alt="Logo"
        />
      </Link>

      <nav className="navBar">
        <ul>
          <Link to="/">
            <li>Todos los productos</li>
          </Link>
          <Link to={`/category/Cerave`}>
            <li>Cerave</li>
          </Link>
          <Link to={"/category/Bioderma"}>
            <li>Bioderma</li>
          </Link>
          <Link to={"/category/Vichy"}>
            <li>Vichy</li>
          </Link>
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
