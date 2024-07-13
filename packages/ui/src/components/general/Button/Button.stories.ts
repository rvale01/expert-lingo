import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from "./Button";

const meta = {
    title: 'Design System/General/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
  } satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      text: 'Button',
      type: 'primary',
      disabled: false,
      shape: "default"
    },
  };

export const Default: Story = {
  args: {
    text: "Button",
    type: "default"
  }
};

export const Dashed: Story = {
  args: {
    text: "Button",
    type: "dashed"
  }
};

export const Link: Story = {
  args: {
    text: "Button",
    type: "link"
  }
};

export const Text: Story = {
  args: {
    text: "Button",
    type: "text"
  }
};
  