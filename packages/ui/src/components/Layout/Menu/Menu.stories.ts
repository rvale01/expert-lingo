import type { Meta, StoryObj } from '@storybook/react';
import Menu from "./Menu";

const meta = {
    title: 'Design System/Layout/Menu',
    component: Menu,
    tags: ['autodocs'],
    argTypes: {},
  } satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        key: "home",
        label: "Home",
      }, 
      {
        key: "search",
        label: "Search",
      },
      {
        key: "categories",
        label: "Categories",
      },
      {
        key: "account",
        label: "Sign In / Login",
      },
    ]
  },
};