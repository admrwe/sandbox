import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button className={styles.button}>{children}</button>;
};
