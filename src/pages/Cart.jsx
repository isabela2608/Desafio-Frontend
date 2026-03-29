import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";

function Cart() {

  const { cart } = useContext(CartContext)

  return (
    <div>
      <h1>Carrinho</h1>

      {cart.length === 0 && (
        <>
          <p>Não há itens por aqui</p>

          <Link to="/products">
<span>Ir às compras</span>
            <FaChevronRight />          </Link>
        </>
      )}

      {cart.map(item => (
        <div key={item.id}>

          <h3>{item.title}</h3>
          <p>Preço: R$ {item.price}</p>
          <p>Quantidade: {item.quantity}</p>

        </div>
      ))}

    </div>
  )
}

export default Cart