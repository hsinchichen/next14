'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navlink/NavLink';
import Image from 'next/image';

const pathDatas = [
  {
    name: 'HomePage',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];

function Links() {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmid = true;

  return (
    <>
      <ul className={styles.links}>
        {pathDatas.map((data) => (
          <NavLink item={data} key={data.path} />
        ))}
        {session ? (
          <>
            {isAdmid && <NavLink item={{ name: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ name: 'Login', path: '/login' }} />
        )}
      </ul>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setOpen((prev) => !prev)}
          />
          <span
            className={styles.closeBtn}
            onClick={() => setOpen((prev) => !prev)}
          >
            X
          </span>
          <ul className={styles.mobileLinks}>
            {pathDatas.map((data) => (
              <NavLink item={data} key={data.path} />
            ))}
            {session ? (
              <>
                {isAdmid && (
                  <NavLink item={{ name: 'Admin', path: '/admin' }} />
                )}
                <button className={styles.logout}>Logout</button>
              </>
            ) : (
              <NavLink item={{ name: 'Login', path: '/login' }} />
            )}
          </ul>
        </>
      )}
    </>
  );
}

export default Links;
