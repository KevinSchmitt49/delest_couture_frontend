import styles from "../styles/Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navleft}>
        <Image src="/burger_menu.png" alt="menu" width={40} height={40} />
        <Image
          src="/logo_delest_couture.png"
          alt="logo Delest-couture"
          width={127}
          height={19}
        />
      </div>
      <div className={styles.navright}>
        <Image src="/cart_default.png" alt="panier" width={40} height={40} />
        <Image
          src="/user_default.png"
          alt="mon compte"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}

export default Header;
