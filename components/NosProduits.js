import styles from "../styles/NosProduits.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Produit A",
    collection: "Color",
    price: "99 €",
    images: [
      "/products/robea_a.jpg",
      "/products/robe_a.jpg",
      "/products/robe_b.jpg",
    ],
  },
  {
    id: 2,
    name: "Produit B",
    collection: "Dark night",
    price: "129 €",
    images: ["/products/robe2a_a.jpg", "/products/robe2_a.jpg"],
  },
  {
    id: 3,
    name: "Produit C",
    collection: "Color",
    price: "189 €",
    images: ["/products/robe3a_a.jpg", "/products/robe3_a.jpg"],
  },
  {
    id: 4,
    name: "Produit D",
    collection: "Choud",
    price: "119 €",
    images: [
      "/products/robe4a_a.jpg",
      "/products/robe4_a.jpg",
      "/products/robe4_b.jpg",
    ],
  },
];

function NosProduits() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedCollections, setSelectedCollections] = useState([]);
  //   const [sortedProducts, setSortedProducts] = useState(products);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setCurrentImageIndexes(products.map(() => 0));
    }
  }, [products]);

  const prev = (productIndex) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalImages = products[productIndex].images.length;
      newIndexes[productIndex] =
        (newIndexes[productIndex] - 1 + totalImages) % totalImages;
      return newIndexes;
    });
  };

  const next = (productIndex) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalImages = products[productIndex].images.length;
      newIndexes[productIndex] = (newIndexes[productIndex] + 1) % totalImages;
      return newIndexes;
    });
  };

  // ------------------modale Collection -----------
  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
    filterIsOpen ? setFilterIsOpen(false) : "";
  };
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedCollections(
      (prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value) // décocher
          : [...prev, value] // cocher
    );
  };
  //------on filtre les produits via la collection--------
  const filteredProducts =
    selectedCollections.length === 0
      ? products
      : products.filter((product) =>
          selectedCollections.includes(product.collection)
        );
  //-------collection unique ------------
  const uniqueCollections = [...new Set(products.map((p) => p.collection))];

  const modalCollection = () => {
    if (modalIsOpen) {
      return (
        <div className={styles.modal}>
          <div className={styles.modalTriangle}></div>
          <div className={styles.modalContent}>
            {uniqueCollections.map((collection) => (
              <label key={collection}>
                <input
                  type="checkbox"
                  value={collection}
                  onChange={handleCheckboxChange}
                  checked={selectedCollections.includes(collection)}
                />
                Collection {collection}
              </label>
            ))}
          </div>
        </div>
      );
    }
  };
  //---------bouton filtre/tri---------
  const showFilter = () => {
    setFilterIsOpen(!filterIsOpen);
    modalIsOpen ? setModalIsOpen(false) : "";
  };

  // Fonction de tri des produits par prix
  const sortByPrice = (products, isAscending = true) => {
    return [...products].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("€", "").trim());
      const priceB = parseFloat(b.price.replace("€", "").trim());
      return isAscending ? priceA - priceB : priceB - priceA;
    });
  };

  // Fonction pour inverser l'ordre du tri (croissant/décroissant)
  const handleSort = () => {
    setIsAscending((prev) => !prev);
  };

  const modalFilter = () => {
    if (filterIsOpen) {
      return (
        <div className={styles.modalFilter}>
          <div className={styles.modalTriangleFilter}></div>
          <div className={styles.modalContentFilter}>
            <button onClick={() => sortByPriceAscending(products)}>
              Prix croissant
            </button>
            <button onClick={() => sortByPriceDecending(products)}>
              Prix décroissant
            </button>
            <button>Réinitialiser</button>
          </div>
        </div>
      );
    }
  };
  const displayedProducts = sortByPrice(filteredProducts, isAscending);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img src="le_shop.png" alt="" className={styles.image} />
        <h1> - Nos produits - </h1>
      </div>
      <section className={styles.main}>
        <div className={styles.filter}>
          <p>
            <strong>{displayedProducts.length} </strong>
            créations
          </p>
          <div className={styles.buttonContainer}>
            <div className={styles.dropdownWrapper}>
              <button
                className={styles.btnMenu}
                onClick={() => showModal()}
                // onClick={() => ouvrirItineraire(atelier)}
              >
                <Image
                  src="/picto_cursors.png"
                  alt="picto curseur"
                  width={12}
                  height={12}
                />
                Collections
              </button>
              {modalCollection()}
            </div>
            <div className={styles.dropdownWrapper}>
              <button className={styles.btnMenu} onClick={handleSort}>
                Trier par prix ({isAscending ? "Croissant" : "Décroissant"})
              </button>
              {modalFilter()}
            </div>
          </div>
        </div>
        <div className={styles.productList}>
          {displayedProducts.map((product, index) => (
            <div key={product.id} className={styles.productItem}>
              <Link href={`/produit/${product.id}`}>
                <a>
                  <div className={styles.content}>
                    <Image
                      src={
                        currentImageIndexes.length > 0
                          ? product.images[currentImageIndexes[index]]
                          : "/attente.png" // une image par défaut
                      }
                      alt={product.name}
                      width={490}
                      height={700}
                      priority={index === 0}
                    />
                    <div className={styles.text}>
                      <span>{product.name}</span>
                      <span className={styles.price}>{product.price}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <div className={styles.arrows}>
                <button onClick={() => prev(index)} className="nav-button">
                  <Image
                    src="/Arrow.png"
                    alt="flèche gauche"
                    width={32}
                    height={32}
                    className={styles.arrowleft}
                  />
                </button>
                <button onClick={() => next(index)} className="nav-button">
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default NosProduits;
