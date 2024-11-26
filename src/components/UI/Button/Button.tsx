import classNames from "classnames";

import type { ButtonProps } from "./types";

import styles from "./Button.module.scss";

function Button({ children, theme, className, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className, theme && styles[theme])}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
