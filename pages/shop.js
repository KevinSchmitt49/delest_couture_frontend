import styles from "../styles/Shop.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NosProduits from "@components/NosProduits";

function Shop() {
  return (
    <main className={styles.main}>
      <Header />
      <NosProduits />
      <Footer />
    </main>
  );
}

export default Shop;
