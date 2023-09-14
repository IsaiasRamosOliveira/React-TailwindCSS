import { Meta, StoryObj } from "@storybook/react";

import Aside from ".";

const meta: Meta<typeof Aside> = {
  title: "Organisms/Aside",
  component: Aside,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<typeof Aside> = {
  args: {
    children: "Aside",
  }
}

export const Blue: StoryObj<typeof Aside> = {
  args: {
    children: "Aside",
    className: "theme-blue"
  }
}

