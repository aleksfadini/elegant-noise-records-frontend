import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import styles from './styles.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="is-hidden-tablet">
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href="/" passHref>
              <Image
                src="/images/mobile.png"
                alt="logo"
                width="189"
                height="60"
                unoptimized={true}
                style={{ cursor: `pointer` }}
              />
            </Link>
            <div className={styles.headerGrid}>
              <div className={styles.hamburguerMenu}>
                <GiHamburgerMenu
                  size={30}
                  cursor="pointer"
                  color="#fff"
                  onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                  <>
                    <div className={styles.sidebar}>
                      <div className={styles.sidebarHeader}>
                        <div className={styles.closeIcon}>
                          <RiCloseFill
                            size={30}
                            color="#fff"
                            onClick={() => setIsOpen(!isOpen)}
                          />
                        </div>
                      </div>
                      <div className={styles.sidebarLinks}>
                        <Link href="/" passHref>
                          <span onClick={() => setIsOpen(!isOpen)}>
                            Releases
                          </span>
                        </Link>
                        <Link href="/artists" passHref>
                          <span onClick={() => setIsOpen(!isOpen)}>
                            Artists
                          </span>
                        </Link>
                        <Link href="/demos" passHref>
                          <span onClick={() => setIsOpen(!isOpen)}>Demos</span>
                        </Link>
                        <Link href="/contact" passHref>
                          <span onClick={() => setIsOpen(!isOpen)}>
                            Contact
                          </span>
                        </Link>
                        {/* <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://mushadelicrecords.lojavirtualnuvem.com.br/"
                        >
                          Store
                        </a> */}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://open.spotify.com/playlist/2On9Qqg6sunRFYP5lhCoSv?si=V79Fv3YeS9iU2fM0qD9Pqw&nd"
                        >
                          Playlist Spotify
                        </a>
                      </div>
                    </div>
                    <div
                      className={styles.backdrop}
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
