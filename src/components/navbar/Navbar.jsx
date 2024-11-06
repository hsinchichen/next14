import Navlink from './links/Links';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Navlink />
    </header>
  );
}

export default Navbar;
