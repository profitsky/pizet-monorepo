import { commonThemeStd } from './commonThemeStd';
import { textStylesStd } from './textStylesStd';
import { ThemeType } from './theme.types';

export const darkThemeStd: ThemeType = {
	title: 'Standard Dark',
	value: 'darkThemeStd',
	icon: 'circle',
	background: {
		light: '#282828',
		darken: '#1C1C1C',
	},
	greyScale: {
		text: {
			primary: '#D3D7E7',
			secondary: '#9D9D9D',
			tertiary: '#74829C',
		},
		stroke: '#3A3A3A',
		dividers: '#323232',
		disabled: {
			element: '#3D3D3D',
			text: '#525E74',
			background: '#4A4A4A',
		},
		white: '#FFFFFF',
	},
	systemColors: commonThemeStd.systemColors,
	accentColors: commonThemeStd.accentColors,
	space: commonThemeStd.space,
	textStyles: {
		headlines: textStylesStd.headlines,
		bodyText: textStylesStd.bodyText,
		font: textStylesStd.font,
		buttonText: textStylesStd.buttonText,
		linkText: textStylesStd.linkText,
		captionText: textStylesStd.captionText,
	},
};
