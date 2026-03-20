//Fazer o card ser clicavel 
import { Link } from "react-router-dom"

import styles from "./ProductCard.module.css"

function ProductCard({ id, image, title, price }) {
  return (

    <Link to={`/products/${id}`} className={styles.card}>

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>R$ {price}</p>

    </Link>

  )
}

export default ProductCard