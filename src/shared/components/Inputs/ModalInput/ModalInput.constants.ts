import { InputHTMLAttributes } from 'react';

import { ModalInputSizeType, ModalInputVariantType } from './ModalInput.types';

export const ModalInputVariant: ModalInputVariantType = 'filled';
export const ModalInputSize: ModalInputSizeType = 'medium';
export const ModalInputType: InputHTMLAttributes<HTMLInputElement>["type"] = 'text'; // prettier-ignore
