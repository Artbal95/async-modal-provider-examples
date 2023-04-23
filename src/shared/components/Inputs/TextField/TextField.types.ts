import {
  HTMLElementCSSProperties,
  SizesType,
  VariantsType,
} from '../../../types';

export type TextFieldVariantType = VariantsType;
export type TextFieldSizeType = SizesType;

// prettier-ignore
export interface ITextFieldProps extends HTMLElementCSSProperties<HTMLInputElement> {
  variant?: TextFieldVariantType;
  size?: TextFieldSizeType;
}
