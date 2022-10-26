import { useEffect, useState } from "react";
import { convertRate } from "../../services";
import { CURRENCY_CODES } from "../../utils/constants";
import styles from "./Header.module.scss";

export const Header = () => {
  const [USD, setUSD] = useState(0);
  const [EUR, setEUR] = useState(0);

  useEffect(() => {
    convertRate(CURRENCY_CODES.USD, CURRENCY_CODES.UAH).then((response) =>
      setUSD(response)
    );
    convertRate(CURRENCY_CODES.EUR, CURRENCY_CODES.UAH).then((response) =>
      setEUR(response)
    );
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.currency}>
          <p>USA Dollar</p>
          <span>{USD}</span>
        </div>
          <h2 className={styles.header_content_title}>To UAH</h2>    
        <div className={styles.currency}>
          <p>Euro</p>
          <span>{EUR}</span>
        </div>
      </div>
    </header>
  );
};
