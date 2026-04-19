import { createContext, useState, useEffect } from "react"
export const CartContext = createContext()
export function CartProvider({ children }) {

  //Carregar do localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  //Salvar sempre que mudar algo
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  //Adicionar item
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)

      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      }

      return [...prev, product]
    })
  }

  //Remover
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  //Aumentar
  const increaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  //Diminuir
  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  //Limpar
  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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