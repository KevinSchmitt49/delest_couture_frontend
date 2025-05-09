import styles from "../styles/Carousel_products.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Produit A", price: "99 €", image: "/products/robe.png" },
  { id: 2, name: "Produit B", price: "129 €", image: "/products/robe2.png" },
  { id: 3, name: "Produit C", price: "189 €", image: "/products/robe3.png" },
  { id: 4, name: "Produit D", price: "119 €", image: "/products/robe4.png" },
];

function CarouselProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(3);
      else if (width >= 504) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxIndex = products.length - slidesToShow;
  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // console.log(slidesToShow);
  return (
    <div className={styles.productCarousel}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
        }}
      >
        {products.map((product) => (
          <div
            className={styles.content}
            key={product.id}
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={690}
              height={690}
            />
            <div className={styles.text}>
              <span>{product.name}</span>
              <span className={styles.price}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        <button onClick={prev} className="nav-button">
          <Image
            src="/Arrow.png"
            alt="flèche gauche"
            width={32}
            height={32}
            className={styles.arrowleft}
          />
        </button>
        <button onClick={next} className="nav-button">
          <Image
            src="/Arrow.png"
            alt="flèche droite"
            width={32}
            height={32}
            className={styles.arrowright}
          />
        </button>
      </div>
    </div>
  );
}

export default CarouselProducts;
