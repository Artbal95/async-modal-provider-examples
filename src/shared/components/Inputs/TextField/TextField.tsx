import { FC } from 'react';

import { ITextFieldProps } from './TextField.types';
import {
  TextFieldSize,
  TextFieldType,
  TextFieldVariant,
} from './TextField.constants';

export const TextField: FC<ITextFieldProps> = ({
  variant = TextFieldVariant,
  size = TextFieldSize,
  type = TextFieldType,
  ...rest
}) => (
  <div>
    <input {...rest} type={type} data-variant={variant} data-size={size} />
  </div>
);
