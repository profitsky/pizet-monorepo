import { MouseEventHandler } from 'react';

export interface ICoreButton {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}
