import styles from "./Home.module.css";
import banner from "./../assets/Banner.png";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Home() {
  return (
    <section className={styles.home_container}>

      <div className={styles.text_container}>
        <h1>Bem-vindo a DevShop!</h1>
        <p>Sua loja de roupas favorita.</p>

        <Link to ="/products" className={styles.botton}>
            <span>Ir às compras</span>
            <FaChevronRight />
        </Link>
      </div>


      <div className={styles.image_container}>
        <img src={banner} alt="DevShop" />
      </div>

    </section>
  );
}

export default Home;