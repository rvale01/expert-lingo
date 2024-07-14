import type { Meta, StoryObj } from '@storybook/react';
import Tag from "./Tag";

const meta = {
    title: 'Design System/Data Display/Tag',
    component: Tag,
    tags: ['autodocs'],
    argTypes: {},
  } satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlueTag: Story = {
  args: {
    children: 'Tag',
    color: "blue"
  },
};

export const SuccessTag: Story = {
  args: {
    children: "Tag",
    color: "success"
  }
};