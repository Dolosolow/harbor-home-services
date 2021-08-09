import { useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export const useResponsiveToggle = (minWidth: number) => {
  const [isDesktop] = useMediaQuery(`(min-width: ${minWidth}px)`);
  const [hideMobile, setHideMobile] = useState(true);

  useEffect(() => {
    if (!isDesktop) {
      setHideMobile(false);
    } else {
      setHideMobile(true);
    }
  }, [isDesktop]);

  return { hideMobile };
};
