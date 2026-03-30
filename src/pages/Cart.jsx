import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import styles from "./Cart.module.css"

function Cart() {

  const { 
    cart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    clearCart
  } = useContext(CartContext)

  const totalCart = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrinho</h1>

      {cart.length === 0 && (
        <div className={styles.empty}>
          <p>Não há itens por aqui</p>

          <Link to="/products" className={styles.link}>
            <span>Ir às compras</span>
            <FaChevronRight />
          </Link>
        </div>
      )}

      {cart.map(item => {

        const totalItem = item.price * item.quantity

        return (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />

            <h3>{item.title}</h3>

            <p>Preço unitário: R$ {item.price}</p>

            <div className={styles.counter}>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <p>Total: R$ {totalItem.toFixed(2)}</p>

            <button 
              className={styles.removeBtn}
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>

          </div>
        )
      })}

      {cart.length > 0 && (
        <>
          <h2 className={styles.total}>
            Total da compra: R$ {totalCart.toFixed(2)}
          </h2>

          <button 
            className={styles.clearBtn}
            onClick={clearCart}
          >
            Limpar carrinho
          </button>
        </>
      )}

    </div>
  )
}

export default Cart