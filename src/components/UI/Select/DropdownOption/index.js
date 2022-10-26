import styles from "./DropdownOption.module.scss";

export const DropdownOption = ({ option, onOptionClick }) => {
  return (
    <div
      className={styles.dropdown_item}
      onClick={onOptionClick.bind(null, option)}
    >
      {option}
    </div>
  );
};