import styles from "../styles/Service.module.css";
import Footer from "./footer";

function Service() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img src="nos_ateliers.png" alt="" className={styles.image} />
        <h1> - Nos ateliers - </h1>
      </div>
      <div className={styles.containerSection}>
        <section className={styles.section}>
          <h2>
            Création de vêtements sur mesure Delest Couture donne vie à vos
            idées
          </h2>
          <img
            src="image_service_creation.png"
            alt="Défilé haute couture"
            className={styles.image}
          />
          <p>
            <strong>
              Vous rêvez d’une robe unique, d’un costume original ou d’un
              vêtement qui vous ressemble ? &#32;
            </strong>
            Delest Couture crée des pièces sur mesure, selon vos envies, votre
            style et votre budget.
          </p>
          <ul>
            <li>Robe de mariée sur mesure</li>
            <li>Robe de soirée, déguisements, vêtements de cérémonie</li>
            <li>Créations pour enfants, femmes et hommes</li>
          </ul>
          <p>
            Nous utilisons tous types de tissus, du plus noble au tissu de
            récupération, et nous vous accompagnons de A à Z : croquis, choix
            des matières, devis gratuit. Chaque création est pensée avec vous,
            pour vous.
          </p>
        </section>
        <section className={styles.section2}>
          <h2>
            Delest Couture : retouches et transformation textile à votre image
          </h2>
          <img
            src="image_service_retouche.png"
            alt="retouche en atelier"
            className={styles.image}
          />
          <p>
            <strong>
              Vous avez un pantalon trop long, une robe trop ample ou une housse
              de coussin abîmée ?
            </strong>
            Chez Delest Couture, nous redonnons vie à vos vêtements et textiles
            grâce à des services de retouches vestimentaires professionnels
            adaptés à tous les besoins. Que ce soit un ourlet à faire, une
            boutonnière à reprendre, un rideau à ajuster ou une pièce à
            transformer, notre atelier de couture prend soin de chaque détail :
            choix du fil, finition adaptée (point piqué, invisible, avec pose de
            biais, talonnette, etc.).Nous réalisons vos retouches de vêtements à
            la main ou à la machine dans des délais rapides et avec le plus
            grand soin.
          </p>
          <ul>
            <li>
              Retouches vêtements : pantalons, jeans, robes, jupes, joggings
            </li>
            <li>Petits travaux d’ameublement : rideaux, coussins, housses</li>
            <li>Ajustement précis selon votre morphologie</li>
          </ul>
          <p>
            Ne laissez plus vos vêtements au fond du placard : offrez-leur une
            nouvelle vie avec Delest Couture, votre couturière professionnelle
            de confiance.
          </p>
        </section>
        <section className={styles.section}>
          <h2>
            Transformation et recyclage textile : l’upcycling par Delest Couture
          </h2>
          <img
            src="upcycling.png"
            alt="recyclage de textile"
            className={styles.image}
          />
          <p>
            <strong>
              Chez Delest Couture, nous croyons en la seconde vie des textiles.
            </strong>
            Réutiliser un vieux vêtement, c’est conserver un tissu que vous
            aimez, ou donner une nouvelle utilité à une pièce oubliée.
          </p>
          <ul>
            <li>Transformation de vêtements anciens en accessoires uniques</li>
            <li>Recyclage textile créatif et écoresponsable</li>
            <li>Création collaborative et respectueuse de l’environnement</li>
          </ul>
          <p>
            Plutôt que de jeter, transformez ! Offrez une seconde chance à vos
            vêtements avec un geste utile, esthétique et écologique.
          </p>
        </section>
        <section className={styles.section2}>
          <p className={styles.tag}>NOUVEAU</p>
          <h2>Tissu d’ameublement par Delest Couture : rideaux, nappes...</h2>
          <img
            src="image_service_ameublement.png"
            alt="fauteille en tissu"
            className={styles.image}
          />
          <p>
            <strong>
              Chez Delest Couture, nous croyons en la seconde vie des textiles.
            </strong>
            Réutiliser un vieux vêtement, c’est conserver un tissu que vous
            aimez, ou donner une nouvelle utilité à une pièce oubliée.
          </p>
          <ul>
            <li>Transformation de vêtements anciens en accessoires uniques</li>
            <li>Recyclage textile créatif et écoresponsable</li>
            <li>Création collaborative et respectueuse de l’environnement</li>
          </ul>
          <p>
            Plutôt que de jeter, transformez ! Offrez une seconde chance à vos
            vêtements avec un geste utile, esthétique et écologique.
          </p>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Service;
