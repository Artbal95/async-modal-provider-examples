import { FC } from 'react';

import cl from './Button.module.css';
import { IButtonProps } from './Button.types';
import {
  ButtonChildren,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from './Button.constants';

export const Button: FC<IButtonProps> = ({
  variant = ButtonVariant,
  size = ButtonSize,
  children = ButtonChildren,
  type = ButtonType,
  ...rest
}) => (
  <button
    className={cl.Button}
    type={type}
    {...rest}
    data-variant={variant}
    data-size={size}
  >
    {children}
  </button>
);
