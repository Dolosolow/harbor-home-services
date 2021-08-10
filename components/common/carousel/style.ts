import type { FlexProps } from "@chakra-ui/react";

import type { ItemProps } from "./index";

export const defaultCarouselContainerProps: FlexProps = {
  align: "center",
  justify: "flex-start",
  flexDir: "column",
  overflow: "hidden",
};

export const defaultInnerContainerProps: FlexProps = {
  align: "center",
  justify: "center",
  whiteSpace: "nowrap",
  transition: "transform 0.4s",
};

export const defaultItemProps: ItemProps = {
  w: "100%",
};
