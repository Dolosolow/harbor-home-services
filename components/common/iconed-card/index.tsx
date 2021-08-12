import type { FlexProps } from "@chakra-ui/react";

export interface ICProps {
  title: string;
  content: string;
  IconComponent: React.ReactNode;
  height?: Array<string | null>;
  navLink?: { href: string; placeholder: string } | null;
}

export interface ICCProps extends FlexProps {
  children: React.ReactNode;
}

export { IconedCard } from "./IconedCard";
export { IconedCardContainer } from "./IconedCardContainer";
