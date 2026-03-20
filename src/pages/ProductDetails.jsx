import styles from "./ProductDetails.module.css"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import loading from "./../assets/loading.svg"

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  // LOADING
  if (!product) {
    return (
      <div className={styles.loading_container}>
        <img src={loading} alt="carregando" />
      </div>
    )
  }

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

        <p className={styles.price}>R$ {product.price}</p>

        <p className={styles.category}>
          Categoria: {product.category}
        </p>

        <p className={styles.description}>
          {product.description}
        </p>

        <button className={styles.button}>
          Adicionar ao carrinho
        </button>
      </div>

    </section>
  )
}

export default ProductDetails