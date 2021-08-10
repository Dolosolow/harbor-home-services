import { Flex } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";

export interface CIProps {
  children: React.ReactNode;
  h?: string | number;
  w?: string | number;
  width?: string | number;
}

export const CarouselItem = ({ children, ...props }: CIProps) => {
  const carouselItemProps: FlexProps = Object.assign(defaultCarouselItemProps, props);
  return <Flex {...carouselItemProps}>{children}</Flex>;
};

const defaultCarouselItemProps: FlexProps = {
  align: "center",
  justify: "center",
  h: "500px",
  w: "80%",
  shrink: 0,
};
