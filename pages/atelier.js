import styles from "../styles/Atelier.module.css";
import Services from "../components/Services";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Atelier() {
  return (
    <main className={styles.main}>
      <Header />
      <Services />
      <Footer />
    </main>
  );
}

export default Atelier;
