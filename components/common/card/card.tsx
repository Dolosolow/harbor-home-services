import { VStack, Text, Button } from "@chakra-ui/react";
import type { ButtonProps, StackProps } from "@chakra-ui/react";
import NextLink from "next/link";

import { defaultButtonProps, defaultContainerProps } from "./style";

export interface CProps {
  buttonText?: string;
  dark?: boolean;
  includeLinkButton?: boolean;
  subText?: string;
  text?: string;
  title?: string;
  size?: "md" | "lg";
  buttonStyles?: Omit<ButtonProps, "color">;
  containerStyles?: StackProps;
}

export const Card = ({
  dark = false,
  includeLinkButton = false,
  size = "md",
  ...props
}: CProps) => {
  const { containerStyles, title, text, subText, buttonText, buttonStyles } = props;

  const buttonProps = Object.assign(defaultButtonProps, buttonStyles);
  const containerProps = Object.assign(defaultContainerProps, containerStyles);

  return (
    <VStack {...containerProps}>
      {title && (
        <Text
          color="pAqua"
          fontSize={[15]}
          fontWeight={500}
          letterSpacing={3}
          textTransform="uppercase"
          zIndex={10}
        >
          {title}
        </Text>
      )}
      {text && (
        <Text
          w={["100%", null, "545px"]}
          fontWeight={700}
          fontSize={[35, null, 45, 40, 45]}
          lineHeight={[1, 1.2, 1.4]}
          letterSpacing={-2}
        >
          {text}
        </Text>
      )}
      {subText && (
        <Text
          color={dark ? (!title ? "#12121277" : "#121212") : "pGray"}
          fontSize={[15, null, 18]}
          w={["100%", null, "80%", "100%"]}
          pb={[4]}
        >
          {subText}
        </Text>
      )}
      {includeLinkButton && (
        <NextLink href="contact">
          <Button color="white" {...buttonProps}>
            {buttonText}
          </Button>
        </NextLink>
      )}
    </VStack>
  );
};
