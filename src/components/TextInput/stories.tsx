import { Meta, StoryFn } from '@storybook/react';
import { TextInput, TextInputProps } from '.';
import { AlternateEmail } from '@styled-icons/material-outlined/AlternateEmail';

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: 'Teste label',
    name: 'input-name',
    type: 'text',
    disabled: false,
    errorMessage: '',
  },
  parameters: {
    layout: 'fullscreen',
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
    value: {
      type: {
        name: 'string',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email'],
      },
    },
  },
} as Meta<TextInputProps>;

export const Template: StoryFn<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

export const OnError: StoryFn<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

OnError.args = {
  errorMessage: 'Something went wrong, Sorry!',
  value: 'Something you typed',
  icon: <AlternateEmail />,
};

export const WithText: StoryFn<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

WithText.args = {
  value: 'Something you typed',
};

export const WithIcon: StoryFn<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

WithIcon.args = {
  value: 'Something you typed',
  icon: <AlternateEmail />,
};

export const Disabled: StoryFn<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

Disabled.args = {
  value: 'Something you typed',
  icon: <AlternateEmail />,
  disabled: true,
};

export const TextArea: StoryFn<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

TextArea.args = {
  value: 'Something you typed',
  icon: <AlternateEmail />,
  as: 'textarea',
};
