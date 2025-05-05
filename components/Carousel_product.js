import styles from "../styles/Carousel_products.module.css";
import Image from "next/image";

function CarouselProducts() {
  return (
    <div>
      <div className={styles.frame}>
        <Image src="/robe.png" alt="robe" width={690} height={690} />
        <div className={styles.arrows}>
          <Image
            src="/Arrow.png"
            alt="flèche gauche"
            width={32}
            height={32}
            className={styles.arrowleft}
          />
          <Image
            src="/Arrow.png"
            alt="flèche droite"
            width={32}
            height={32}
            className={styles.arrowright}
          />
        </div>
      </div>
      <div className={styles.container}>
        <span>Produit 1</span>
        <span className={styles.price}>99 €</span>
      </div>
    </div>
  );
}

export default CarouselProducts;
