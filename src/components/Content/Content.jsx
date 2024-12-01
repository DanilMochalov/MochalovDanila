import React from "react";
import styles from './Content.module.css'; 


function Content({ title, children }) {
  return (
    <div className={styles.content}>
      <div>
      <h2 className={styles.command}>Mochalov@Danila <p>~/welcome</p> </h2>
        <h3>{title}</h3>
      </div>
      <div className={styles["content-body"]}>{children}</div>
    </div>
  );
}

export default Content;
