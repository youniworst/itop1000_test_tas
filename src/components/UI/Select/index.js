import { useState } from "react";
import { DropdownOption } from "./DropdownOption";
import styles from "./Select.module.scss";

export const Select = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const optionClickHandler = (option) => {
    setSelectedValue(option);
    onChange(option);
  };

  const optionElements = options.map((option) => (
    <DropdownOption
      key={option}
      option={option}
      onOptionClick={optionClickHandler}
    />
  ));

  const isOpenClass = `${isOpen && styles.open}`;
  const dropdownBodyClasses = `${styles.dropdown_body} ${isOpenClass}`;

  return (
    <label className={styles.label} onClick={toggleDropdown}>
      <input disabled className={styles.select} type={'text'} value={selectedValue} />
      {isOpen && <div className={dropdownBodyClasses}>{optionElements}</div>}
    </label>
  );
};
