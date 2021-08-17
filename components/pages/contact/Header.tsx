import { Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { LogoIcon } from "@/components/icons/LogoIcon";

export const Header = () => (
  <>
    <NextLink href="/">
      <LogoIcon
        boxSize={24}
        color="blackAlpha.900"
        display={["none", null, null, "block"]}
        cursor="pointer"
        zIndex={100}
      />
    </NextLink>
    <Text mt={8} fontWeight={700} fontSize={[26, null, 32]}>
      Tell us about your project.
    </Text>
    <Text mt={2} fontSize={12} color="blackAlpha.600">
      This is information about yourself and of your project.
      <br />
      You can change it at any time.
    </Text>
  </>
);
