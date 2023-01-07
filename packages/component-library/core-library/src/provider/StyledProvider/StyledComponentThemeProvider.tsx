import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeType } from '../../theme';

interface IStyledComponentThemeProviderProvider {
	children: ReactNode;
	theme: ThemeType;
}

export const StyledComponentThemeProvider = ({
	theme,
	children,
}: IStyledComponentThemeProviderProvider): JSX.Element => (
	<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
