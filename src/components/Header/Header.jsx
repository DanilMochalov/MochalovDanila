import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
      <header className={styles.header}> 
        <a href="https://github.com/DanilMochalov">
          <img className={styles.headerIcon} src="/img/git-svgrepo-com.svg" alt="GitHub" />
        </a>
        <a href="https://habr.com/ru/users/Bear_Fobetor/">
          <img className={styles.headerIcon} src="/img/habr-svgrepo-com.svg" alt="Habr" />
        </a>
        <a href="https://t.me/ebmwrtIT">
          <img className={styles.headerIcon} src="/img/telegram-svgrepo-com.svg" alt="Telegram" />
        </a>
      </header>
    );
}
export default Header;
