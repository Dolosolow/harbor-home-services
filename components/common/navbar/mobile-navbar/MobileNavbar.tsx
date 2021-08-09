import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import { LogoIcon } from "@/components/icons/LogoIcon";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavDrawer } from "./NavDrawer";

import { navbarStyles } from "../style";
import type { NProps } from "../index";

const Navbar = ({ checkpointReached, inverseTheme, directories }: NProps) => {
  const { pathname } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavMenu = () => {
    if (showMenu) {
      document.body.style.overflow = "unset";
      setShowMenu(false);
    } else {
      document.body.style.overflow = "hidden";
      setShowMenu(true);
    }
  };

  useEffect(() => {
    if (showMenu) toggleNavMenu();
  }, [pathname]);

  return (
    <Flex
      px={6}
      bgColor={checkpointReached ? "pBlueLight" : "transparent"}
      color={inverseTheme ? "#121212" : "whiteAlpha.900"}
      backdropFilter={checkpointReached ? "blur(10px)" : undefined}
      {...navbarStyles}
    >
      <NextLink href="/">
        <a aria-label="Home">
          <LogoIcon
            pos="absolute"
            left={3}
            top={-3.5}
            boxSize="90px"
            color={inverseTheme ? "#121212" : "whiteAlpha.900"}
          />
        </a>
      </NextLink>
      <HamburgerMenu showMenu={showMenu} inverseTheme={inverseTheme} toggleMenu={toggleNavMenu} />
      <NavDrawer openDrawer={showMenu} directories={directories} />
    </Flex>
  );
};

export { Navbar as MobileNavbar };
