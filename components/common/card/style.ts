import type { ButtonProps, StackProps } from "@chakra-ui/react";

export const defaultButtonProps: ButtonProps = {
  size: "md",
  variant: "primary",
};

export const defaultContainerProps: StackProps = {
  align: "flex-start",
  justify: "center",
  spacing: [6, null, 8],
  w: "55%",
};
