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
      {!hideLogo && (
        <NextLink href="/">
          <a aria-label="Home">
            <LogoIcon
              position="absolute"
              left={5}
              top={checkpointReached ? -3.5 : -6}
              boxSize={checkpointReached ? "90px" : "160px"}
              color={inverseTheme ? "#121212" : "whiteAlpha.900"}
            />
          </a>
        </NextLink>
      )}
      <HStack spacing={12} display={["flex", "none", "flex"]}>
        {getSiteLinks(directories)}
      </HStack>
    </Flex>
  );
};

export { Navbar as ResponsiveNavbar };
