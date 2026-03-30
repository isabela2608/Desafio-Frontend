import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"

import Container from "./Container";
import styles from "./Navbar.module.css";

import logo from "../../assets/logo.jpeg";

function Navbar() {

  const { cart } = useContext(CartContext)

  // Soma dos itens
  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

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
  <Link to="/cart" className={styles.cartLink}>
    
    <div className={styles.cartContainer}>
      <FaShoppingCart className={styles.cartIcon} />

      {totalItems > 0 && (
        <span key={totalItems} className={styles.badge}>
          {totalItems}
        </span>
      )}
    </div>

  </Link>
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