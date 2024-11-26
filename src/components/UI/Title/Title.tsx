import classNames from "classnames";

import type { TitleProps } from "./types";

import styles from "./Title.module.scss";

function Title({ children, className, ...props }: TitleProps) {
  return (
    <div className={classNames(styles.title, className)} {...props}>
      {children}
    </div>
  );
}

export default Title;
