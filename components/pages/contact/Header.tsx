import { Text } from "@chakra-ui/react";

import { LogoIcon } from "@/components/icons/LogoIcon";

export const Header = () => (
  <>
    <LogoIcon boxSize={24} color="blackAlpha.900" display={["none", null, null, "block"]} />
    <Text mt={8} fontWeight={700} fontSize={32}>
      Tell us about your project.
    </Text>
    <Text fontSize={12} color="blackAlpha.600">
      This is information about yourself and of your project.
    </Text>
    <Text fontSize={12} color="blackAlpha.600">
      You can change it at any time.
    </Text>
  </>
);
