/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';
import {
  SiBeatport,
  SiFacebook,
  SiInstagram,
  SiSoundcloud,
} from 'react-icons/si';
import Image from 'next/image';

export const Sidebar = () => {
  const router = useRouter();
  const route = router.pathname;

  return (
    // <div className="is-hidden-mobile">
    //   <div className={styles.sidenav}>

    <div className="is-hidden-mobile">
      <div className={styles.sidenav}>
        {/* Particle container */}
        <div className="particles">
          {[...Array(50).keys()].map(
            (
              i, // Increased from 20 to 50
            ) => (
              <div key={i} className={`particle particle-${i + 1}`} />
            ),
          )}
        </div>

        <Link href="/">
          <div className="px-7 mb-5 mt-0 pointer">
            <Image
              width="400"
              height="400"
              src="/images/final_logo.png"
              alt="logo"
              // layout="fill"
              objectFit="contain"
              unoptimized={true}
            />
          </div>
        </Link>
        <div
          className={
            route === `/` || route.includes(`release`)
              ? styles.selectedMenu
              : ``
          }
        >
          <Link href="/">Releases</Link>
        </div>
        <div className={route.includes(`artist`) ? styles.selectedMenu : ``}>
          <Link href="/artists">Artists</Link>
        </div>
        <div className={route === `/demos` ? styles.selectedMenu : ``}>
          <Link href="/demos">Demos</Link>
        </div>
        <div className={route === `/contact` ? styles.selectedMenu : ``}>
          <Link href="/contact">Contact</Link>
        </div>
        {/* <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mushadelicrecords.lojavirtualnuvem.com.br/"
          >
            Store
          </a>
        </div> */}
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/playlist/2On9Qqg6sunRFYP5lhCoSv?si=V79Fv3YeS9iU2fM0qD9Pqw&nd"
          >
            Playlist Spotify
          </a>
        </div>

        <div className={styles.socialNetworks}>
          {/* <a
            href="https://www.beatport.com/label/mushadelic-records/84164"
            target="_blank"
            rel="noreferrer"
          >
            <SiBeatport size={22} />
          </a> */}
          <a
            href="https://www.instagram.com/boornazian_jazz/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100073062575248"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook size={22} />
          </a>
          <a
            href="https://soundcloud.com/elegantnoiserecords"
            target="_blank"
            rel="noreferrer"
          >
            <SiSoundcloud size={22} />
          </a>
        </div>
      </div>
      <div
        className={`${styles.sidenavDistro}`}
        style={{ color: `rgba(255, 255, 255, 0.2)` }}
      >
        Developed by:{` `}
        <a target="_blank" href="https://aleksfadini.com/" rel="noreferrer">
          Aleks Fadini
        </a>
      </div>
    </div>
  );
};
