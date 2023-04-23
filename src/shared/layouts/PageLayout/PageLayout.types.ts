import { ReactNode } from 'react';

import { ISideBarContainerItems } from '../../containers';

export interface IPageLayoutProps {
  sideBarOptions?: ISideBarContainerItems[];
  children: ReactNode;
}
