import { Meta, StoryObj } from "@storybook/react";
import Group from ".";

const meta: Meta<typeof Group> = {
  title: "Molecules/group",
  component: Group,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<typeof Group> = {
  args: {
    children: "Group"
  }
}

export const Blue: StoryObj<typeof Group> = {
  args: {
    children: "Group",
    className: "theme-blue"
  }
}