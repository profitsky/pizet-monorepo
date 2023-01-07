import { createGlobalStyle } from 'styled-components';

export const StdGlobalStyle = createGlobalStyle`
  ${({ theme }) => `
    html {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      overflow-y: scroll;
    }

    *,
    *:before,
    *:after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 1.4;
      color: ${theme.greyScale.text.secondary};
      background-color: ${theme.background.light};

      #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
      }
    }

    .dateTimePicker {
      margin-top: 20px !important;

			.MuiPickersArrowSwitcher-root {
          position: static;
          justify-content: center;
          margin: 20px 0 0;

          .CdsButton {
            border-radius: 8px;

            &[disabled] {
              background: ${theme.background.darken};
              color: ${theme.greyScale.text.primary};
            }
          }
				}

				.MuiPickersArrowSwitcher-spacer {
				  width: 10px;
				}

				.MuiClock-clock {
				  background: transparent;
				  border: 2px solid ${theme.greyScale.stroke};

				  .MuiClock-pin,
				  .MuiClockPointer-root,
				  .MuiClockPointer-root > .MuiClockPointer-thumb,
				  .MuiClockNumber-root.Mui-selected {
            background-color: ${theme.accentColors.accent1.primary};
            border-color: ${theme.accentColors.accent1.primary};
				  }

				  .MuiClockNumber-root {
				    font-family: ${theme.textStyles.font.family.secondary}
				  }
				}
			}
  `}
`;

export const stdGlobalStyleObject = {
	theme: 'Std',
	globStyle: StdGlobalStyle,
};
