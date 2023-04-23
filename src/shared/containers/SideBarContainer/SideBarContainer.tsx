import { FC } from 'react';

import { ListItem } from '../../components/ListItem';

import cl from './SideBarContainer.module.css';
import { ISideBarContainerProps } from './SideBarContainer.types';
import { SideBarOptions } from './SideBarContainer.constants';

export const SideBarContainer: FC<ISideBarContainerProps> = ({
  sideBarOptions = SideBarOptions,
}) => (
  <ul className={cl.SideBarContainer}>
    {sideBarOptions.map(({ Icon, text, onClick }) => (
      <ListItem key={text} Icon={Icon} onClick={onClick}>
        {text}
      </ListItem>
    ))}
  </ul>
);
