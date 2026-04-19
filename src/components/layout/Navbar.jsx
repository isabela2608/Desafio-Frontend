import { Link, useLocation } from "react-router-dom"; 
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import Container from "./Container";
import styles from "./Navbar.module.css";

import logo from "../../assets/logo.jpeg";

function Navbar({ search, setSearch }) {

  const { cart } = useContext(CartContext)
  const location = useLocation()

  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.nav_content}>

          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>

          <div className={styles.right_side}>

            {location.pathname === "/products" && (
              <div className={styles.search_box}>
                <FaSearch className={styles.search_icon} />
                <input
                  type="text"
                  placeholder="Buscar produtos ou categorias..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.search_input}
                />
              </div>
            )}

            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/products">Produtos</Link>
              </li>

              <li className={styles.item}>
                <Link to="/cart">
                  <div className={styles.cartContainer}>
                    <FaShoppingCart className={styles.cartIcon} />

                    {totalItems > 0 && (
                      <span className={styles.badge}>
                        {totalItems}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            </ul>

          </div>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;