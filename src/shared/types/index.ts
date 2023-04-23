import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type RouteType = 'LIST' | 'CREATE';

export type VariantsType = 'outlined' | 'filled' | 'standard';
export type SizesType = 'small' | 'medium' | 'large';

// prettier-ignore
export interface HTMLElementCSSProperties<Element> extends DetailedHTMLProps<ButtonHTMLAttributes<Element>, Element> {
  children?: ReactNode;
}
