import styles from "../styles/Footer.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 1024) setIsMobile(true);
    else if (width >= 1024) setIsMobile(false);
  }, []);

  // console.log(isMobile);

  const textBloc = (
    <div>
      <span> Conditions générales d'utilisation </span>
      <span> Conditions générales de vente </span>
      <span> Politique de données personnelles et mentions légales </span>
      <span> Contact </span>
    </div>
  );
  const textLine = (
    <div>
      <span>Conditions générales d'utilisation - </span>
      <span>Conditions générales de vente - </span>
      <span>Politique de données personnelles et mentions légales - </span>
      <span>Contact</span>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.socialLogo}>
        <a
          href="https://www.facebook.com/DELESTCOUTURE.DC/"
          target="_blank"
          rel="page facebook"
        >
          <Image src="/Facebook.png" alt="facebook" height={45} width={45} />
        </a>
        <a
          href="https://www.instagram.com/delest_couture/"
          target="_blank"
          rel="page instagram"
        >
          <Image src="/Instagram.png" alt="instagram" height={45} width={45} />
        </a>
        <a
          href="https://www.youtube.com/c/DelestcoutureBordeaux"
          target="_blank"
          rel="page youtube"
        >
          <Image src="/Youtube.png" alt="youtube" height={45} width={45} />
        </a>
        <a
          href="https://www.linkedin.com/company/delest-couture/posts/?feedView=all"
          target="_blank"
          rel="page Linkedin"
        >
          <Image src="/Linkedin.png" alt="linkedin" height={45} width={45} />
        </a>
      </div>
      <div className={styles.text}>
        {isMobile === true ? textBloc : textLine}
      </div>
    </div>
  );
}

export default Footer;
