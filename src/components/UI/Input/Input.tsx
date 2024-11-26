import classNames from "classnames";

import type { InputProps } from "./types";

import styles from "./Input.module.scss";

function Input({
  type = "text",
  className,
  isError,
  onChange,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={classNames(styles.input, className, {
        [styles.error]: isError,
      })}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    />
  );
}

export default Input;
