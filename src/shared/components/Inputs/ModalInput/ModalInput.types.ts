import {
  HTMLElementCSSProperties,
  SizesType,
  VariantsType,
} from '../../../types';

export type ModalInputVariantType = VariantsType;
export type ModalInputSizeType = SizesType;

// prettier-ignore
export interface IModalInputProps extends HTMLElementCSSProperties<HTMLInputElement> {
    variant?: ModalInputVariantType;
    size?: ModalInputSizeType;
}
