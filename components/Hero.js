import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <img src="/Hero1.png" alt="robe" className={styles.img} />
        <img src="/Hero2.png" alt="robe" className={styles.img} />
        <img src="/Hero3.png" alt="robe" className={styles.img} />
      </div>
      <div className={styles.dotContainer}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
      </div>
    </div>
  );
}

export default Hero;
