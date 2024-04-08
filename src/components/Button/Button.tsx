import styles from "./Button.module.css";

interface Props {
  style?: { [property: string]: string };
  children: string;
  onClick?: () => void;
}

const Button = ({ children, style, onClick }: Props) => {
  return (
    <button onClick={onClick} style={style} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
