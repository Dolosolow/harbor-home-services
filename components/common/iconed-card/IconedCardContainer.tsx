import { Flex } from "@chakra-ui/react";

import type { ICCProps } from "./index";

export const IconedCardContainer = ({ children, ...props }: ICCProps) => {
  const containerProps = Object.assign(
    { w: ["90%", null, null, "80%"], flexWrap: "wrap", margin: "-10px" },
    props
  );

  return <Flex {...containerProps}>{children}</Flex>;
};
