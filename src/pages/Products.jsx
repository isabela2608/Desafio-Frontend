import { useState, useEffect } from "react"
import ProductCard from "../components/products/ProductCard"
import styles from "./Product.module.css"
import { FaTimes, FaSearch } from "react-icons/fa";

import electronics from "../assets/electronics.jpg"
import jewelery from "../assets/jewelery.jpg"
import mens from "../assets/mens.jpg"
import womens from "../assets/womens.jpg"
import all from "../assets/todas.avif"


function Products({ search, setSearch }) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [mobileSearch, setMobileSearch] = useState("")

  const fetchData = () => {
    setLoading(true)
    setError(false)

    Promise.all([
      fetch("https://fakestoreapi.com/products").then(res => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then(res => res.json())
    ])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData)
        setCategories(categoriesData)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Quando digitar volta para "Todos"
  const handleMobileSearch = (value) => {
    setMobileSearch(value)
    setSelectedCategory("") // força "Todos"
  }

  const handleNavbarSearch = (value) => {
    setSearch(value)
    setSelectedCategory("") // força "Todos"
  }

  // Quando selecionar uma categoria limpa a busca
  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setMobileSearch("")
    setSearch("")
  }

  const activeSearch = mobileSearch || search || ""

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true

    const matchSearch =
      product.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(activeSearch.toLowerCase())

    return matchCategory && matchSearch
  })

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

      <h1>Conheça nossos produtos:</h1>

      {/*Busca no mobile */}
      <div className={styles.mobile_search}>
        <FaSearch className={styles.mobile_icon} />
        <input
          type="text"
          placeholder="Buscar produtos ou categorias..."
          value={mobileSearch}
          onChange={(e) => handleMobileSearch(e.target.value)}
        />
      </div>

      {loading && <p>Carregando produtos...</p>}

      {error && (
        <div className={styles.feedback}>
          <FaTimes className={styles.feedback_icon} />
          <p>Erro ao tentar buscar produtos</p>
          <button onClick={fetchData}>Tentar novamente</button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className={styles.categories}>

            <div
              className={styles.category_item}
              onClick={() => handleCategoryClick("")}
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
                onClick={() => handleCategoryClick(cat)}
              >
                <div className={`${styles.circle} ${selectedCategory === cat ? styles.active : ""}`}>
                  <img src={getCategoryImage(cat)} alt={cat} />
                </div>
                <span>{cat}</span>
              </div>
            ))}

          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.feedback}>
              <FaTimes className={styles.feedback_icon} />
              <p>Produtos não encontrados</p>
              <button onClick={() => handleCategoryClick("")}>
                Ver todos os produtos
              </button>
            </div>
          ) : (
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
          )}
        </>
      )}

    </section>
  )
}

export default Products