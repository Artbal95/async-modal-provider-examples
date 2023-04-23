import { HTMLElementCSSProperties, SizesType, VariantsType } from '../../types';

export type ButtonVariantType = VariantsType;
export type ButtonSizeType = SizesType;

// prettier-ignore
export interface IButtonProps extends HTMLElementCSSProperties<HTMLButtonElement> {
  variant?: ButtonVariantType
  size?: ButtonSizeType
}
