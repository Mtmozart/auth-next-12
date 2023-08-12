import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { VpnKey } from '@styled-icons/material-outlined/VpnKey';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Texto do botão',
    icon: <VpnKey />,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3.2rem' }}>
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    icon: {
      type: null,
    },
  },
} as Meta<ButtonProps>;

export const Template: StoryFn<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
