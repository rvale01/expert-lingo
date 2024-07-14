import type { Meta, StoryObj } from '@storybook/react';
import Text from "./Text";

const meta = {
    title: 'Design System/General/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
      titleSize: {options: [2, 3, 4, 5, null], control: {type: 'select'}},
    },
  } satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    text: "Text example in storybook"
  },
};

export const Title: Story = {
  args: {
    text: "Title example in storybook",
    isBold: false,
    titleSize: 2,
    type: "warning"
  }
};