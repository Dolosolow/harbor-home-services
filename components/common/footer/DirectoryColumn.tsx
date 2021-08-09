import { Flex, VStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const DirectoryColumn = ({ directories }: { directories: string[] }) => (
  <Flex w={["100%", null, "33.3%"]} h="100%" justify={["flex-start", null, "center"]}>
    <VStack
      w={["100%", null, "33.3%"]}
      h="100%"
      spacing={5}
      align="flex-start"
      my={[10, 10, 0, 0, 0]}
    >
      <Text
        color="pAqua"
        fontSize="16px"
        fontWeight="500"
        letterSpacing={2}
        mb={2}
        textTransform="uppercase"
      >
        Directories
      </Text>
      {directories.map((dir, idx) => {
        const pathname = dir.split(" ")[0].toLowerCase();
        return (
          <NextLink key={idx} href={`/${pathname === "home" ? "" : pathname}`}>
            <a>
              <Text key={dir} color="pGray" fontSize="14px" noOfLines={2}>
                {dir}
              </Text>
            </a>
          </NextLink>
        );
      })}
    </VStack>
  </Flex>
);
