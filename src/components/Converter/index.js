import { useState } from "react";
import { CURRENCY_CODES } from "../../utils/constants";
import { Input, Select } from "../UI";
import styles from "./Converter.module.scss";

export const Converter = () => {

  const options = Object.keys(CURRENCY_CODES);
  return (
    <div className={styles.container}>
      <div className={styles.currency}>
        <Input type={"number"} text={"Dolar USA"} />
        <Select options={options} />
      </div>
      <div className={styles.currency}>
        <Input type={"number"} text={"Dolar USA"} />
        <Select options={options}/>
      </div>
    </div>
  );
};
