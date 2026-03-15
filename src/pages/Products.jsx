import { useState, useEffect } from "react"
import ProductCard from "../components/products/ProductCard"
import styles from "./Product.module.css"

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <section className={styles.geral}>

      <h1>Conheça nossos Produtos:</h1>

      <div className={styles.products_grid}>

        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}

      </div>

    </section>
  )
}

export default Products