import { Meta, Story } from '@storybook/react';

import { CoreButton as CoreButtonComponent } from './CoreButton';
import { ICoreButton } from './CoreButton.types';

export default {
	title: 'Core Library/Atom/Button',
	component: CoreButtonComponent,
	argTypes: {},
} as Meta;

const Template: Story<ICoreButton> = (args: ICoreButton) => <CoreButtonComponent {...args} />;

export const CoreButton = Template.bind({});

CoreButton.args = {};
