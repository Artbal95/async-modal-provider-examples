import { FC } from 'react';

import { IListItemProps } from './ListItem.types';
import { ListItemSpacing, ListItemSpacingChildren } from './ListItem.constants';

export const ListItem: FC<IListItemProps> = ({
  Icon,
  spacing = ListItemSpacing,
  children = ListItemSpacingChildren,
  ...rest
}) => {
  const gap = `${spacing * 8}px`;
  return (
    <li {...rest}>
      {Icon ? <Icon /> : null}
      {children}
    </li>
  );
};
