export interface ISideBarContainerItems {
  text: string;
  Icon?: () => JSX.Element;
  onClick?: () => void;
}

export interface ISideBarContainerProps {
  sideBarOptions?: ISideBarContainerItems[];
}
