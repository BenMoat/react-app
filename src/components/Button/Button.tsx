import styles from "./Button.module.css";

interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, colour = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + colour]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
