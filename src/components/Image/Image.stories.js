import React from "react";

import { Image } from "./index";

const props = {
  title: "Components/Image",
  component: Image,
};

export default props;

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 240,
  height: 240,
  alt: "grid item alt",
  src: "https://media.missguided.com/i/missguided/playboy_storybook_default",
  backgroundColor: "#FFA5B8",
};
