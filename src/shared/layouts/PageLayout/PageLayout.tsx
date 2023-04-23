import { FC } from 'react';

import cl from './PageLayout.module.css';
import { IPageLayoutProps } from './PageLayout.types';

export const PageLayout: FC<IPageLayoutProps> = ({
  children,
  sideBarOptions,
}) => (
  <div className={cl.PageLayout}>
    <div className={cl.PageLayoutInner}>{children}</div>
  </div>
);
