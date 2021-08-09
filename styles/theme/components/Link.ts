import type { ComponentStyleConfig } from "@chakra-ui/react";

export const LinkStyles: ComponentStyleConfig = {
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
      fontSize: "18px",
    },
    xl: {
      px: "20px",
      py: "15px",
      fontSize: "20px",
    },
  },
  variants: {
    navLink: {
      _hover: {
        color: "white",
        textDecoration: "none",
      },
    },
    navLinkMobile: {
      fontSize: 30,
      fontWeight: "bold",
      letterSpacing: -1,
      alignSelf: "flex-start",
      width: "100%",
      _hover: {
        color: "pAqua",
        textDecoration: "none",
      },
    },
  },
};
