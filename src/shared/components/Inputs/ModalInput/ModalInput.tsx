import { FC } from 'react';

import { IModalInputProps } from './ModalInput.types';
import {
  ModalInputSize,
  ModalInputType,
  ModalInputVariant,
} from './ModalInput.constants';

export const ModalInput: FC<IModalInputProps> = ({
  variant = ModalInputVariant,
  size = ModalInputSize,
  type = ModalInputType,
  ...rest
}) => (
  <div>
    {/*//Adornments Start*/}
    <div>S</div>
    <input {...rest} type={type} data-variant={variant} data-size={size} />
    <div />
    {/*//Adornments Ends*/}
    <div>E</div>
  </div>
);
