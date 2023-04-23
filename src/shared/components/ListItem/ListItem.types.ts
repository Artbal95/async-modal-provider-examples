import { HTMLElementCSSProperties } from '../../types';

// prettier-ignore
export interface IListItemProps extends HTMLElementCSSProperties<HTMLLIElement> {
    Icon?: () => JSX.Element
    spacing?: number
}
