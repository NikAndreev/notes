import classNames from "classnames";

import type { LoaderProps } from "./types";

import styles from "./Loader.module.scss";

function Loader({ className, ...props }: LoaderProps) {
  return (
    <div className={classNames(styles.loader, className)} {...props}>
      Загрузка...
    </div>
  );
}

export default Loader;
