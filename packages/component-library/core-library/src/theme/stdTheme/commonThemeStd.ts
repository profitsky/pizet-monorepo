export const commonThemeStd = {
	accentColors: {
		accent1: {
			primary: '#6147FF',
			secondary: '#B4AEFF',
			tertiary: '#EDEBFF',
			quaternary: '#F8F9FF',
		},
		state: {
			hover: '#3022CD',
			click: '#0C008F',
		},
	},
	systemColors: {
		successful: {
			primary: '#56DA63',
			secondary: '#ADFFB5',
			tertiary: '#E4FFE7',
			hover: '#29A335',
		},
		attention: {
			primary: '#FFD952',
			secondary: '#FFE794',
			tertiary: '#FFF8DD',
			hover: '#AC890C',
		},
		error: {
			primary: '#FF5252',
			secondary: '#FFC0C0',
			tertiary: '#FFEAEA',
			hover: '#ED2121',
		},
	},
	space: new Array(35).fill(null).map((_value, index) => index * 4),
	breakpoints: {
		XSmall: 375,
		Small: 720,
		Medium: 1024,
		Large: 1440,
		XLarge: 1920,
	},
};
