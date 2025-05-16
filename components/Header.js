import styles from "../styles/Header.module.css";
import Image from "next/image";
import Menu from "./Menu";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const quantityInCart = useSelector((state) => state.cart.value);

  const toggleShowMenu = () => {
    setShowMenu((content) => !content);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  // console.log(showMenu);

  return (
    <nav className={styles.nav}>
      <div className={styles.navleft}>
        <button onClick={toggleShowMenu} className={styles.btn}>
          <Image src="/burger_menu.png" alt="menu" width={40} height={40} />
        </button>
        <Menu isOpen={showMenu} onClose={closeMenu} />
        <Image
          src="/logo_delest_couture.png"
          alt="logo Delest-couture"
          width={127}
          height={19}
        />
      </div>
      <div className={styles.navright}>
        <div className={styles.cart}>
          <Image src="/cart_default.png" alt="panier" width={40} height={40} />
          <div
            className={`${styles.dotNumber} ${
              quantityInCart < 1 ? styles.hidden : ""
            }`}
          >
            {quantityInCart}
          </div>
        </div>
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
