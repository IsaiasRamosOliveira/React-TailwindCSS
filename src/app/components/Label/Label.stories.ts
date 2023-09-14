import { Meta, StoryObj } from "@storybook/react";
import Label from ".";

const meta: Meta<typeof Label> = {
  title: "Molecules/label",
  component: Label,
  argTypes: {}
}

export default meta;

export const Primary: StoryObj<typeof Label> = {
  args: { icon: "🔈", title: "title", variant: "common" }
}

export const Orange: StoryObj<typeof Label> = {
  args: {
    icon: "🔈", 
    title: "title",
    variant: "orange"
  }
}

export const Green: StoryObj<typeof Label> = {
  args: {
    icon: "🔈",
    title: "title",
    variant: "green"
  }
}
