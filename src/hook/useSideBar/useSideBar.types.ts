import { RouteType } from '../../shared/types';
import { ISideBarContainerItems } from '../../shared/containers';

export interface IUseSideBarReturn {
  route: RouteType;
  sideBarOptions: ISideBarContainerItems[];
}

export interface IUseSideBar {
  (): IUseSideBarReturn;
}
