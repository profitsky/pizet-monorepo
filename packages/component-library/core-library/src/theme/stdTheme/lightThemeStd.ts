import { commonThemeStd } from './commonThemeStd';
import { textStylesStd } from './textStylesStd';

export const lightThemeStd = {
	title: 'Standard Light',
	value: 'lightThemeStd',
	icon: 'circlehollow',
	background: {
		light: '#FFFFFF',
		darken: '#F4F6FA',
	},
	greyScale: {
		text: {
			primary: '#23262F',
			secondary: '#3D456C',
			tertiary: '#66738F',
		},
		stroke: '#E9EDF3',
		dividers: '#E3E9F6',
		disabled: {
			element: '#C2CBDE',
			text: '#8B93AC',
			background: '#F4F6FA',
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
