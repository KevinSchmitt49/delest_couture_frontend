import styles from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const ateliers = [
  {
    id: 1,
    name: "Delest couture",
    denomination: "Pierre Chareau",
    adresse: "1 rue Pierre Chareau",
    codePostal: "33300",
    city: "Bordeaux",
    tel: "05 57 93 40 26",
    hour: "lundi",
  },
  {
    id: 2,
    name: "Delest couture",
    denomination: "Vélodrome",
    adresse: "13 rue du vélodrome",
    codePostal: "33200",
    city: "Bordeaux",
    tel: "05 56 45 09 72",
    hour: "mardi",
  },
  {
    id: 3,
    name: "Delest couture ameublement",
    denomination: "Paul",
    adresse: "1 rue Paul",
    codePostal: "33300",
    city: "Bordeaux",
    tel: "05 57 93 40 26",
    hour: "mercredi",
  },
];

const horaires = [
  { jour: "Lundi", horaire: "9h00 - 12h00 / 14h00 - 17h00" },
  { jour: "Mardi", horaire: "9h00 - 12h00 / 14h00 - 17h00" },
  { jour: "Mercredi", horaire: "9h00 - 12h00 / 14h00 - 17h00" },
  { jour: "Jeudi", horaire: "9h00 - 12h00 / 14h00 - 17h00" },
  { jour: "Vendredi", horaire: "9h00 - 12h00 / 14h00 - 17h00" },
  { jour: "Samedi", horaire: "9h00 - 19h00" },
  { jour: "Dimanche", horaire: "Fermé" },
];
const estOuvert = (horaire) => {
  if (horaire.toLowerCase() === "fermé") {
    return "ferme";
  }
  const now = new Date();
  // extraction des horaire d'ouverture
  const [matin, aprem] = horaire.split(" / ");
  const [matinStart, matinEnd] = matin.split(" - ");
  const [apremStart, apremEnd] = aprem.split(" - ");
  const [matinStartHour, matinStartMin] = matinStart.split("h");
  const [matinEndHour, matinEndMin] = matinEnd.split("h");
  const [apremStartHour, apremStartMin] = apremStart.split("h");
  const [apremEndHour, apremEndMin] = apremEnd.split("h");

  //calcul en minutes si le temps écouler depuis minuit est compris entre les minutes écoulé pour les horaire d'ouverture
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  //test horaire perso
  // const currentMinutes = 17 * 60 + 0;
  const startMinutesMatin =
    parseInt(matinStartHour) * 60 + parseInt(matinStartMin);
  const endMinutesMatin = parseInt(matinEndHour) * 60 + parseInt(matinEndMin);
  const startMinutesAprem =
    parseInt(apremStartHour) * 60 + parseInt(apremStartMin);
  const endMinutesAprem = parseInt(apremEndHour) * 60 + parseInt(apremEndMin);

  // return (
  if (
    currentMinutes < startMinutesMatin - 30 ||
    (currentMinutes < startMinutesAprem - 30 &&
      currentMinutes >= endMinutesMatin) ||
    currentMinutes >= endMinutesAprem
  ) {
    return "ferme";
  } else if (
    (currentMinutes < startMinutesMatin &&
      currentMinutes >= startMinutesMatin - 30) ||
    (currentMinutes >= startMinutesAprem - 30 &&
      currentMinutes < startMinutesAprem)
  ) {
    return "bientotOuvert";
  } else if (
    (currentMinutes >= startMinutesMatin &&
      currentMinutes < endMinutesMatin - 30) ||
    (currentMinutes >= startMinutesAprem &&
      currentMinutes < endMinutesAprem - 30)
  ) {
    return "ouvert";
  } else if (
    (currentMinutes >= endMinutesMatin - 30 &&
      currentMinutes < endMinutesMatin) ||
    (currentMinutes >= endMinutesAprem - 30 && currentMinutes < endMinutesAprem)
  ) {
    return "bientotFerme";
  }
  // (currentMinutes >= startMinutesMatin &&
  //   currentMinutes <= endMinutesMatin) ||
  // (currentMinutes >= startMinutesAprem && currentMinutes <= endMinutesAprem)
  // );
};
// const now = new Date();

console.log(estOuvert(horaires[0].horaire));

const getJourActuel = () => {
  const jours = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const today = new Date();
  return jours[today.getDay()];
};

//itinéraire automatique
const ouvrirItineraire = (atelier) => {
  const adresseComplete = `${atelier.adresse}, ${atelier.codePostal} ${atelier.city}`;
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    adresseComplete
  )}`;
  window.open(url, "_blank");
};

function Menu({ isOpen, onClose }) {
  const [hourOpenId, setHourOpenId] = useState(null);

  const openHours = (id) => {
    setHourOpenId((content) => (content === id ? null : id));
  };
  const jourActuel = getJourActuel();
  const horaireActuel = horaires.find((h) => h.jour === jourActuel);
  const [etat, setEtat] = useState(estOuvert(horaireActuel.horaire));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const jour = getJourActuel();
      const horaire = horaires.find((h) => h.jour === jour)?.horaire;
      if (horaire) {
        setEtat(estOuvert(horaire));
      }
    }, 60 * 1000); // toutes les minutes

    return () => clearInterval(interval); // nettoyage à la destruction
  }, []);

  const messages = {
    ouvert: "Ouvert",
    bientotOuvert: "Ouvre bientôt",
    bientotFerme: "Ferme bientôt",
    ferme: "Fermé",
  };

  const table = (
    <table className={styles.tableContainer}>
      <tbody>
        {horaires.map((item, index) => {
          const isToday = item.jour === jourActuel;

          return (
            <tr key={index} style={{ fontWeight: isToday ? "bold" : "normal" }}>
              <td className={styles.column1}>{item.jour}</td>
              <td>{item.horaire}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div className={styles.menuContainer}>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <button className={styles.btnClose} onClick={onClose}>
          <Image
            src="/cta_close.png"
            alt="fermer menu"
            width={18}
            height={18}
          />
        </button>
        {/* Contenu du menu */}
        <ul className={styles.list}>
          <li className={styles.li}>
            <Link href="#about" passHref>
              <a className={styles.link}>Les ateliers</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#Boutique" passHref>
              <a className={styles.link}>La boutique en ligne</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#produits" passHref>
              <a className={styles.link}>Les collections</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#contact" passHref>
              <a className={styles.link}>Les actualités</a>
            </Link>
          </li>
        </ul>
        <div className={styles.filet}></div>
        <div className={styles.adressesAteliers}>
          {ateliers.map((atelier) => (
            <div key={atelier.id}>
              <div className={styles.containerOuvertureMag}>
                <h5>{atelier.name}</h5>
                <div
                  className={`${styles.dot} ${
                    styles[`dot${etat.charAt(0).toUpperCase() + etat.slice(1)}`]
                  }`}
                ></div>
                <p className={`${styles.status} ${styles[etat]}`}>
                  {messages[etat]}
                </p>
              </div>
              <h4>{atelier.denomination}</h4>
              <p>
                {atelier.adresse}
                <br />
                {atelier.codePostal} {atelier.city}
                <br />
                Tél : {atelier.tel}
              </p>
              <button
                className={styles.btnMenu}
                onClick={() => ouvrirItineraire(atelier)}
              >
                <Image
                  src="/picto_go.png"
                  alt="picto itinéraire"
                  width={18}
                  height={18}
                />
                Itinéraire
              </button>
              <button
                className={styles.btnHoraires}
                onClick={() => openHours(atelier.id)}
              >
                {/* Voir les horaires */}
                {hourOpenId === atelier.id ? (
                  <span>Masquer les horaires</span>
                ) : (
                  <span>voir les horaires</span>
                )}
                {hourOpenId === atelier.id && <p>{table}</p>}
              </button>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Menu;
