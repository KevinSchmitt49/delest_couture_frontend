import Image from "next/image";
import styles from "../styles/FicheProduit.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../reducers/cart";

function FicheProduit({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showModalAddToCart, setshowModalAddToCart] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const dispatch = useDispatch();
  const quantityInCart = useSelector((state) => state.cart.value);

  console.log("article dans le panier : ", quantityInCart);

  const modalUpdatedCart = (
    <div
      className={`${styles.modalUpdateCart} ${fadeOut ? styles.fadeOut : ""}`}
    >
      {/* <div className={styles.modalContent}> */}
      <button
        className={styles.CTAClose}
        onClick={() => setshowModalAddToCart(false)}
      >
        <span className={styles.btnClose}>X&nbsp;</span>
        <span className={styles.textClose}>fermé</span>
      </button>
      {showModalAddToCart && (
        <div className={styles.modal}>Article(s) ajouté(s) au panier !</div>
      )}
      {/* </div> */}
    </div>
  );

  const addToCart = (quantity) => {
    dispatch(updateCart(quantity));
    setshowModalAddToCart(true);
    setFadeOut(false);

    setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    setTimeout(() => {
      setshowModalAddToCart(false);
    }, 5000);
  };

  console.log(showModalAddToCart);

  const decrementQuantity = () => {
    selectedQuantity > 1 ? setSelectedQuantity(selectedQuantity - 1) : "";
  };
  const incrementQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  if (!product || !product.images) return <p>Produit introuvable</p>;

  return (
    <>
      {showModalAddToCart ? modalUpdatedCart : ""}
      <div className={styles.main}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={selectedImage}
              alt="Image principale"
              width={400}
              height={600}
              priority
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
              <button
                className={styles.addToCart}
                onClick={() => addToCart(selectedQuantity)}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FicheProduit;
