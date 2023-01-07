export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withThemeProvider = (Story) => {
	return <Story />;
};

export const decorators = [withThemeProvider];
