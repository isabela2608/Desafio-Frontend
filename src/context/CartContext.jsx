import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  //Remover item
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  //Aumentar quantidade
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    setCart(updatedCart)
  }

  //Diminuir quantidade
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    setCart(updatedCart)
  }

  //Limpar o carrinho
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        setCart, 
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}