import styles from "./ProductCard.module.css"

function ProductCard({ image, title, price }) {
  return (

    <div className={styles.card}>

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>R$ {price}</p>

    </div>

  )
}

export default ProductCard