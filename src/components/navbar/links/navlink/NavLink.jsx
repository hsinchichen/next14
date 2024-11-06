'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

function NavLink({ item }) {
  const { name, path } = item;

  const currentPath = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        currentPath === path ? styles.active : ''
      }`}
      href={path}
    >
      {name}
    </Link>
  );
}

export default NavLink;
