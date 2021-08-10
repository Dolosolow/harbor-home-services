import type { FlexProps } from "@chakra-ui/react";

type defaultChildrenPropsFunc = (alternate: boolean) => {
  defaultLeftProps: FlexProps;
  defaultRightProps: FlexProps;
};

export const defaultInnerContainerProps: FlexProps = {
  h: "100%",
  w: "100%",
  flexDir: ["column", null, null, "row", null],
  align: "center",
};

export const getDefaultProps = (customProps: FlexProps): FlexProps => {
  const defaultProps = {
    flexDir: "column",
    flexShrink: 0,
    h: "100%",
    justify: "flex-start",
    position: "relative",
    w: "100vw",
    bgPos: "center",
    bgRepeat: "repeat",
    bgSize: "contain",
  };

  return Object.assign(defaultProps, customProps);
};

export const getDefaultChildrenProps: defaultChildrenPropsFunc = (alternate: boolean) => {
  const leftSideStyles: FlexProps = {
    justify: alternate ? "center" : "flex-end",
    h: "90%",
    w: ["100%", null, "50%"],
  };

  const rightSideStyles: FlexProps = {
    align: "center",
    justify: "center",
    h: "90%",
    w: ["100%", null, "50%"],
  };

  return {
    defaultLeftProps: alternate ? rightSideStyles : leftSideStyles,
    defaultRightProps: alternate ? leftSideStyles : rightSideStyles,
  };
};
