import { InputHTMLAttributes } from "react";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  onChange?: (value: string) => void;
}
