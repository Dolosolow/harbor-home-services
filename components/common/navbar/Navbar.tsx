import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useResponsiveToggle } from "@/hooks/useResponsiveToggle";
import type { NProps } from "./index";

import { content } from "@/lang/en-home";

const DynamicResponsiveNavbar = dynamic<NProps>(() =>
  import("./responsive-navbar/ResponsiveNavbar").then((mod) => mod.ResponsiveNavbar)
);
const DynamicMobileNavbar = dynamic<NProps>(() =>
  import("./mobile-navbar/MobileNavbar").then((mod) => mod.MobileNavbar)
);

export const Navbar = () => {
  const { checkpointReached } = useScrollPosition(100);
  const { hideMobile } = useResponsiveToggle(1050);
  const { pathname } = useRouter();

  const [inverseTheme, setInverseTheme] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") {
      setHideLogo(true);
    } else {
      setHideLogo(false);
    }

    switch (pathname) {
      case "/contact":
        if (inverseTheme) setInverseTheme(false);
        break;
      case "/":
      case "/about":
      case "/services":
        if (!checkpointReached) {
          setInverseTheme(true);
        } else {
          setInverseTheme(false);
        }
        break;
    }
  }, [pathname, checkpointReached]);

  return hideMobile ? (
    <DynamicResponsiveNavbar
      directories={content.directories}
      hideLogo={hideLogo}
      inverseTheme={inverseTheme}
      checkpointReached={checkpointReached}
    />
  ) : (
    <DynamicMobileNavbar
      directories={content.directories}
      inverseTheme={inverseTheme}
      checkpointReached={checkpointReached}
    />
  );
};
