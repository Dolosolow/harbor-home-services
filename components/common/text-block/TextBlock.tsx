import { Text } from "@chakra-ui/react";

import { defaultBlockStyles } from "./style";

import type { TBProps } from "./index";

export const TextBlock = ({ text, styles }: TBProps) => {
  const blockStyles = Object.assign(defaultBlockStyles, styles);

  return <Text {...blockStyles}>{text}</Text>;
};
