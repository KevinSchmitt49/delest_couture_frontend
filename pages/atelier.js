import styles from "../styles/Atelier.module.css";
import Services from "../components/Services";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Atelier() {
  return (
    <main className={styles.main}>
      <Header />
      <Services />
    </main>
  );
}

export default Atelier;
