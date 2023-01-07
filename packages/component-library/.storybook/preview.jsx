import { stdGlobalStyleObject, StyledComponentThemeProvider, themesStd } from 'core-library';

const themesArray = [themesStd.darkThemeStd, themesStd.lightThemeStd];

const globalStylesArray = [stdGlobalStyleObject];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const generateItems = () => {
	const temporaryArray = [];
	for (const { title, value, icon } of themesArray) {
		temporaryArray.push({
			title,
			value,
			icon,
		});
	}
	return temporaryArray;
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Globalny motyw',
		defaultValue: themesStd.lightThemeStd.value,
		toolbar: {
			items: generateItems(),
			dynamicTitle: true,
		},
	},
};

const getTheme = (themeName) => {
	return themesArray.find(({ value }) => value === themeName);
};

const getGlobalStyle = (themeName) => {
	return globalStylesArray
		.filter(({ theme }) => {
			return themeName.includes(theme);
		})
		.map(({ globStyle, theme }) => {
			const GlobalStyle = globStyle;
			return <GlobalStyle key={theme} />;
		});
};

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme);

	return (
		<StyledComponentThemeProvider theme={theme}>
			<Story />
			{getGlobalStyle(context.globals.theme)}
		</StyledComponentThemeProvider>
	);
};

export const decorators = [withThemeProvider];
