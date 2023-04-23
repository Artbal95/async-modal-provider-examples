import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonSizeType, ButtonVariantType } from './Button.types';

export const ButtonVariant: ButtonVariantType = 'filled';
export const ButtonSize: ButtonSizeType = 'medium';
export const ButtonChildren: ReactNode = 'Click Me!!!';
export const ButtonType: ButtonHTMLAttributes<HTMLButtonElement>['type'] = 'button'; // prettier-ignore
