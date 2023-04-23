import { InputHTMLAttributes } from 'react';

import { TextFieldSizeType, TextFieldVariantType } from './TextField.types';

export const TextFieldVariant: TextFieldVariantType = 'filled';
export const TextFieldSize: TextFieldSizeType = 'medium';
export const TextFieldType: InputHTMLAttributes<HTMLInputElement>["type"] = 'text'; // prettier-ignore
