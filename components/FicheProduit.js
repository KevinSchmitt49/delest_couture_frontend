import Image from "next/image";
import styles from "../styles/FicheProduit.module.css";
import { useState } from "react";

function FicheProduit({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const decrementQuantity = () => {
    selectedQuantity > 1 ? setSelectedQuantity(selectedQuantity - 1) : "";
  };
  const incrementQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  if (!product || !product.images) return <p>Produit introuvable</p>;

  return (
    <div className={styles.main}>
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
      <div className={styles.container}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
        <p>Description courte : {product.shortDescription}</p>
        <h2 className={styles.title}>Description détaillée</h2>
        <p>{product.description}</p>
        {/*-----------sticky add to cart-----------------*/}
        <div className={styles.addToCartContent}>
          <div className={styles.selectButton}>
            <select
              className={styles.taille}
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Taille</option>
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <select
              className={styles.color}
              id="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Couleur</option>
              {product.colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.quantityAndAddToCart}>
            <div className={styles.quantity}>
              <button onClick={() => decrementQuantity()}>
                <img src="/-.png" alt="-" />
              </button>
              {selectedQuantity}
              <button onClick={() => incrementQuantity()}>
                <img src="/+.png" alt="+" />
              </button>
            </div>
            <button className={styles.addToCart}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheProduit;
