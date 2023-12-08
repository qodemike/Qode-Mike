import styles from './Button.module.css';

interface Props{
    style?: {[ property: string ]: string };
    children: string;
}

const Button = ({ children, style }: Props) => {
  return (
    <button style={style} className={styles.btn}>{children}</button>
  )
}

export default Button