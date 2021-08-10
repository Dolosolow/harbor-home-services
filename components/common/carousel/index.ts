import type { FlexProps } from "@chakra-ui/react";

export type ItemProps = {
  maxW?: string;
  maxH?: string;
  h?: string;
  w?: string;
};

export interface CProps {
  children: React.ReactNode;
  carouselStyles?: FlexProps;
  hideIndicators?: boolean;
  itemStyles?: ItemProps;
  staticIndex?: number;
}

export { Carousel } from "./Carousel";
