import { useState } from "react";
import { convertRate } from "../../services";
import { CURRENCY_CODES, CURRENCY_NAMES } from "../../utils/constants";
import { Input, Select } from "../UI";
import styles from "./Converter.module.scss";

export const Converter = () => {
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [firstRate, setFirstRate] = useState(1);
  const [firstCurrencyName, setFirstCurrencyName] = useState(
    "United States Dollar"
  );

  const [secondCurrency, setSecondCurrency] = useState("UAH");
  const [secondRate, setSecondRate] = useState(36.730186);
  const [secondCurrencyName, setSecondCurrencyName] =
    useState("Ukrainian Hryvnia");

  const firstRateHandler = (e) => {
    const amount = e.target.value;
    if(!Number(amount)) return
    setFirstRate(amount);
    convertRate(firstCurrency, secondCurrency, amount).then((response) =>
      setSecondRate(response)
    );
  };
  const secondRateHandler = (e) => {
    const amount = e.target.value;
    if(!Number(amount)) return
    setSecondRate(amount);
    convertRate(secondCurrency, firstCurrency, amount).then((response) =>
      setFirstRate(response)
    );
  };

  const firstCurrencyHandler = (option) => {
    setFirstCurrency(option);
    convertRate(option, secondCurrency, firstRate).then((response) =>
      setSecondRate(response)
    );
    setFirstCurrencyName(CURRENCY_NAMES[option])
  };

  const secondCurrencyHandler = (option) => {
    setSecondCurrency(option);
    convertRate(firstCurrency, option, firstRate).then((response) =>
      setSecondRate(response)
    );
    setSecondCurrencyName(CURRENCY_NAMES[option])
  };

  const options = Object.values(CURRENCY_CODES);
  return (
    <div className={styles.container}>
      <div className={styles.currency}>
        <Input
          type={"number"}
          onChange={firstRateHandler}
          value={firstRate}
          text={firstCurrencyName}
        />
        <Select
          options={options}
          value={firstCurrency}
          onChange={firstCurrencyHandler}
        />
      </div>
      <span className={styles.equals}>-</span>
      <div className={styles.currency}>
        <Input
          type={"number"}
          value={secondRate}
          onChange={secondRateHandler}
          text={secondCurrencyName}
        />
        <Select
          options={options}
          value={secondCurrency}
          onChange={secondCurrencyHandler}
        />
      </div>
    </div>
  );
};
