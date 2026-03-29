import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";

import logo from "../../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>

        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/products">Produtos</Link>
          </li>

          <li className={styles.item}>
            <Link to="/cart">Carrinho</Link>
          </li>

          <li className={styles.item}>
            <Link to="/login">Login</Link>
          </li>
          
        </ul>

      </Container>
    </nav>
  );
}

export default Navbar;