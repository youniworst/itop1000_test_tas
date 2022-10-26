import styles from "./Input.module.scss";

export const Input = ({ value, type, onChange, text }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
      />
      <p className={styles.text}>{text}</p>
    </label>
  );
};
