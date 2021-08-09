import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const getSiteLinks = (directories: string[], isMobile: boolean = false) => {
  const renderPathnames = (directory: string) => {
    switch (directory) {
      case "Home":
        return "";
      case "About Us":
        return "about";
      case "Services":
        return "services";
      case "Contact Us":
        return "contact";
    }
  };

  return (
    <>
      {directories.map((dir) => (
        <NextLink key={dir} href={`/${renderPathnames(dir)}`} passHref>
          <Link
            as="div"
            size="md"
            variant={isMobile ? "navLinkMobile" : "navLink"}
            w={isMobile ? "100%" : "unset"}
          >
            <Text textAlign="left" _hover={{ color: "pAqua" }}>
              {dir}
            </Text>
          </Link>
        </NextLink>
      ))}
    </>
  );
};
