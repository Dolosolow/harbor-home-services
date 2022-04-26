import { css } from "@emotion/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1050px",
  xl: "1255px",
  "2xl": "1400px",
});

export const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
    outline: none;
  }

  body {
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container.container-home {
    padding-top: 0;
    overflow: hidden;

    @media only screen and (max-width: ${breakpoints.xl}) {
      padding-top: 36px;
    }

    @media only screen and (max-width: ${breakpoints.lg}) {
      padding-top: 24px;
    }
  }

  .container.container-about,
  .container.container-services {
    align-items: center;
    padding-top: 144px;
    max-width: 144rem;

    @media only screen and (max-width: ${breakpoints.lg}) {
      padding-top: 96px;
    }
  }

  .container.container-contact {
    flex-direction: column;
  }
`;
