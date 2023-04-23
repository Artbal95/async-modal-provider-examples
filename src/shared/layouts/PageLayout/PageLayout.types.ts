import { ReactNode } from 'react';

import { ISideBarContainerItems } from '../../containers';

export interface IPageLayoutProps {
  title: string;
  sideBarOptions?: ISideBarContainerItems[];
  children: ReactNode;
}
