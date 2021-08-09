import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { GlobalStyles, breakpoints } from "./globals";
import { ButtonStyles as Button } from "./components/Button";
import { LinkStyles as Link } from "./components/Link";

const theme = extendTheme({
  fonts: { heading: "Source Sans Pro", body: "Source Sans Pro" },
  colors: {
    pWhite: "#fff",
    pGray: "#ffffffab",
    pAqua: "#28AFB0",
    pBlue: "#060e1f",
    pBlueLight: "#060e1f8f",
  },
  breakpoints,
  components: {
    Button,
    Link,
  },
});

export const ChakraCtrlFocusProvider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      {props.children}
    </ChakraProvider>
  );
};
