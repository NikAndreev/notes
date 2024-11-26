import type { RadioProps } from "./types";

import styles from "./Radio.module.scss";

function Radio({ label, onChange, ...props }: RadioProps) {
  return (
    <label className={styles.radio}>
      <input
        type="radio"
        className={styles.radio__native}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      />
      <button type="button" className={styles.radio__custom}></button>
      <span className={styles.radio__label}>{label}</span>
    </label>
  );
}

export default Radio;
