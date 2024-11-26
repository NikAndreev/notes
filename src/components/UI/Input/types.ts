import { InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  isError?: boolean;
  onChange?: (value: string) => void;
}
