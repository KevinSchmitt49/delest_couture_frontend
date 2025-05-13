import styles from "../styles/Home.module.css";
import Header from "./Header";
import Head from "next/head";
import Hero from "./Hero";
import CarouselProducts from "./Carousel_product";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Head>
        <title>Delest Couture - home</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
        <h2>Nos créations</h2>
        <p>Découvrez nos toutes dernières créations.</p>
        <CarouselProducts />
        <section className={styles.accessoires}>
          <h2>Nos accessoires</h2>
          <p>Découvrez les accessoires les plus assortis avec nos créations.</p>
          <div className={styles.products}>
            <div className={styles.bloc}>
              <Image
                src="/collier1.png"
                alt="collier 1"
                width={150}
                height={150}
              />
              <span> Collier 1</span>
              <span> 49,90 €</span>
            </div>
            <div className={styles.bloc}>
              <Image
                src="/collier2.png"
                alt="collier 2"
                width={150}
                height={150}
              />
              <span> Collier 2</span>
              <span> 49,90 €</span>
            </div>
          </div>
        </section>
        <section className={styles.femme}>
          <h2>La femme</h2>
          <p>au cœur de nos créations.</p>
          <div className={styles.container_blocImage}>
            <div className={styles.blocImage}>
              <div className={styles.image}>
                <img
                  src="/image_service_retouche.png"
                  alt="service retouche"
                  className={styles.imageService}
                />
                <div className={styles.textImage}>
                  <p className={styles.textImageTitle}>SERVICE RETOUCHE</p>
                  <p>Découvrir &gt;</p>
                </div>
              </div>
            </div>
            <div className={styles.blocImage}>
              <div className={styles.image}>
                <img
                  src="/image_service_creation.png"
                  alt="service création"
                  className={styles.imageService}
                />
                <div className={styles.textImage}>
                  <p className={styles.textImageTitle}>SERVICE CRÉATION</p>
                  <p>Découvrir &gt;</p>
                </div>
              </div>
            </div>
            <div className={styles.blocImage}>
              <div className={styles.image}>
                <img
                  src="/image_service_conversion.png"
                  alt="service conversion"
                  className={styles.imageService}
                />
                <div className={styles.textImage}>
                  <p className={styles.textImageTitle}>SERVICE CONVERSION</p>
                  <p>Découvrir &gt;</p>
                </div>
              </div>
            </div>
            <div className={styles.blocImage}>
              <div className={styles.image}>
                <img
                  src="/image_service_ameublement.png"
                  alt="service cameublement"
                  className={styles.imageService}
                />
                <div className={styles.textImage}>
                  <p className={styles.flag}>NOUVEAU !</p>
                  <p className={styles.textImageTitle}>SERVICE AMEUBLEMENT</p>
                  <p>Découvrir &gt;</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
