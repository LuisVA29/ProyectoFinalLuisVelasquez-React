import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Link to={"./"}>
        <img
          src="https://res.cloudinary.com/dfamqux3j/image/upload/v1711258737/logo-dermacenter-1_hd784p.png"
          alt="Logo"
        />
      </Link>
    </div>
  );
};
