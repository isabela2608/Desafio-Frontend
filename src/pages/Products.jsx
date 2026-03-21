import { useState, useEffect } from "react"
import ProductCard from "../components/products/ProductCard"
import styles from "./Product.module.css"

// Imagens das categorias
import electronics from "../assets/electronics.jpg"
import jewelery from "../assets/jewelery.jpg"
import mens from "../assets/mens.jpg"
import womens from "../assets/womens.jpg"
import all from "../assets/todas.avif"

function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

//buscar produtos e categorias
  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))

    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  // filtro
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  // função que retorna as imagens em categorias
  function getCategoryImage(category) {
    switch (category) {
      case "electronics": return electronics
      case "jewelery": return jewelery
      case "men's clothing": return mens
      case "women's clothing": return womens
      default: return all
    }
  }

  return (
    <section className={styles.geral}>

      <h1>Conheça nossos Produtos:</h1>

      <div className={styles.categories}>

        <div
          className={styles.category_item}
          onClick={() => setSelectedCategory("")}
        >
          <div className={`${styles.circle} ${!selectedCategory ? styles.active : ""}`}>
            <img src={all} alt="todas" />
          </div>
          <span>Todos</span>
        </div>

        {categories.map((cat) => (
          <div
            key={cat}
            className={styles.category_item}
            onClick={() => setSelectedCategory(cat)}
          >
            <div className={`${styles.circle} ${selectedCategory === cat ? styles.active : ""}`}>
              <img src={getCategoryImage(cat)} alt={cat} />
            </div>
            <span>{cat}</span>
          </div>
        ))}

      </div>

      <div className={styles.products_grid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
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