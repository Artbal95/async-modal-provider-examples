import { FC } from 'react';

import cl from './PageLayout.module.css';
import { IPageLayoutProps } from './PageLayout.types';

export const PageLayout: FC<IPageLayoutProps> = ({
  title,
  children,
  sideBarOptions,
}) => (
  <div className={cl.PageLayout}>
    <div className={cl.PageLayoutInner}>
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);
