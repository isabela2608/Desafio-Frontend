import styles from "./ProductDetails.module.css"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import loading from "./../assets/loading.svg"

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  if (!product) {
    return (
      <div className={styles.loading_container}>
        <img src={loading} alt="carregando" />
      </div>
    )
  }

  const totalPrice = product.price * quantity

  return (
    <section className={styles.container}>

      <div className={styles.image_container}>
        <Link to="/products" className={styles.back_button}>
          ← Voltar
        </Link>

        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.info_container}>
        <h1>{product.title}</h1>

        <p className={styles.price}>
          R$ {product.price}
        </p>

        <p className={styles.category}>
          Categoria: {product.category}
        </p>

        <p className={styles.description}>
          {product.description}
        </p>

        {/* 🔥 LINHA COM CONTADOR + BOTÃO */}
        <div className={styles.actions}>

          <div className={styles.counter}>
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>

          <button className={styles.btnCart}>
            <span>Adicionar</span>
            <span className={styles.bntprice}>
              R$ {totalPrice.toFixed(2)}
            </span>
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProductDetails