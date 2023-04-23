import { useState } from 'react';

import { IUseSideBar } from './useSideBar.types';

import { ISideBarContainerItems } from 'shared/containers';
import { RouteType } from 'shared/types';

export const useSideBar: IUseSideBar = () => {
  const [route, setRoute] = useState<RouteType>('LIST');

  const handleOnNavigate = (navigate: RouteType) => () => {
    if (navigate === route) return;
    setRoute(navigate);
  };

  const sideBarOptions: ISideBarContainerItems[] = [
    {
      text: 'List',
      onClick: handleOnNavigate('LIST'),
    },
    {
      text: 'Create Form',
      onClick: handleOnNavigate('CREATE'),
    },
  ];

  return {
    route,
    sideBarOptions,
  };
};
