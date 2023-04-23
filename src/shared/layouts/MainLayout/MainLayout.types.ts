import { ReactNode } from 'react';

import { ISideBarContainerItems } from '../../containers';

export interface IMainLayoutProps {
  sideBarOptions?: ISideBarContainerItems[];
  children: ReactNode;
}
