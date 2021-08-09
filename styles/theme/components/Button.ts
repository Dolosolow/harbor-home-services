import { darken } from "@chakra-ui/theme-tools";
import type { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
  sizes: {
    xs: {
      fontSize: "12px",
    },
    sm: {
      fontSize: "14px",
    },
    md: {
      fontSize: "16px",
    },
    lg: {
      px: ["25px", "25px", "20px", "25px", "25px"],
      py: ["20px", "20px", "20px", "20px", "20px"],
      fontSize: ["16px", "16px", "25px", "16px", "16px"],
    },
  },
  variants: {
    primary: {
      bg: "pAqua",
      color: "white",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "2px",
      _hover: {
        bg: darken("pAqua", 10),
      },
    },
    primaryOutline: {
      bg: "transparent",
      border: "2px solid",
      borderColor: "pAqua",
      color: "white",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "2px",
      _hover: {
        backgroundColor: "pAqua",
        color: "white",
      },
    },
  },
};
