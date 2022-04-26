import { HStack, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

import { LogoIcon } from "@/components/icons/LogoIcon";
import type { NProps } from "../index";

import { getSiteLinks } from "../getSiteLinks";

import { navbarStyles } from "../style";

const Navbar = ({ checkpointReached, directories, inverseTheme, hideLogo, alert }: NProps) => {
  return (
    <Flex
      px="60px"
      top={checkpointReached ? 0 : alert ? 14 : 0}
      left={0}
      bgColor={checkpointReached ? "pBlueLight" : "transparent"}
      color={inverseTheme ? "#121212" : "whiteAlpha.900"}
      backdropFilter={checkpointReached ? "blur(10px)" : undefined}
      {...navbarStyles}
    >
      <Flex w="100%" maxW="1440px" margin="auto" position="relative">
        {!hideLogo && (
          <NextLink href="/">
            <a aria-label="Home">
              <LogoIcon
                position="absolute"
                left={5}
                top={checkpointReached ? -45 : -6}
                boxSize={checkpointReached ? "90px" : "160px"}
                color={inverseTheme ? "#121212" : "whiteAlpha.900"}
              />
            </a>
          </NextLink>
        )}
        <HStack spacing={12} display={["flex", "none", "flex"]} marginLeft="auto">
          {getSiteLinks(directories)}
        </HStack>
      </Flex>
    </Flex>
  );
};

export { Navbar as ResponsiveNavbar };
