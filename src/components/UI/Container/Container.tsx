import type { ContainerProps } from "./types";

import styles from "./Container.module.scss";

function Container({ children, ...props }: ContainerProps) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}

export default Container;
