import { Button } from "@chakra-ui/react";

import { CloseIcon } from "@/components/icons/CloseIcon";
import { HamburgerIcon } from "@/components/icons/HamburgerIcon";

export interface HMProps {
  showMenu: boolean;
  inverseTheme: boolean;
  toggleMenu: () => void;
}

export const HamburgerMenu = ({ inverseTheme, showMenu, toggleMenu }: HMProps) => (
  <Button
    aria-label="navigation menu"
    bgColor="transparent"
    p={0}
    zIndex={100}
    _hover={{ bgColor: "transparent" }}
    onClick={toggleMenu}
  >
    {showMenu ? (
      <CloseIcon
        boxSize={[9, null, 10]}
        color={!inverseTheme || showMenu ? "whiteAlpha.900" : "#121212"}
      />
    ) : (
      <HamburgerIcon
        boxSize={[8, null, 9]}
        color={!inverseTheme || showMenu ? "whiteAlpha.900" : "#121212"}
      />
    )}
  </Button>
);
