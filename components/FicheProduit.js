import Image from "next/image";
import styles from "../styles/FicheProduit.module.css";
import { useState } from "react";

function FicheProduit({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product || !product.images) return <p>Produit introuvable</p>;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={selectedImage}
              alt="Image principale"
              width={400}
              height={600}
            />
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index}`}
                onClick={() => setSelectedImage(src)}
                className={styles.thumb}
              />
            ))}
          </div>
        </div>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
        <p>Description courte : {product.shortDescription}</p>
        <h2 className={styles.title}>Description détaillée</h2>
        <p>{product.description}</p>
      </div>
      {/*-----------sticky add to cart-----------------*/}
      <div className={styles.addToCartContent}>
        <div className={styles.selectButton}>
          <div className={styles.taille}>Taille 38</div>
          <div className={styles.color}>Blue Dark</div>
        </div>
        <div className={styles.quantityAndAddToCart}>
          <div className={styles.quantity}>
            <img src="/-.png" alt="-" />
            2
            <img src="/+.png" alt="+" />
          </div>
          <button className={styles.addToCart}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default FicheProduit;
