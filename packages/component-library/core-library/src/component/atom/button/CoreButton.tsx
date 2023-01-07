import { StyledCoreButton } from './CoreButton.styled';
import { ICoreButton } from './CoreButton.types';

export const CoreButton = ({ onClick, disabled }: ICoreButton): JSX.Element => (
	<StyledCoreButton onClick={onClick} disabled={disabled}>
		siema
	</StyledCoreButton>
);
