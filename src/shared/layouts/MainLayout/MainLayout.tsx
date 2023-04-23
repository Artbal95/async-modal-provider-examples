import { FC } from 'react';

import { SideBarContainer } from '../../containers';

import cl from './MainLayout.module.css';
import { IMainLayoutProps } from './MainLayout.types';

export const MainLayout: FC<IMainLayoutProps> = ({
  children,
  sideBarOptions,
}) => (
  <div className={cl.MainLayout}>
    <SideBarContainer sideBarOptions={sideBarOptions} />
    {children}
  </div>
);
