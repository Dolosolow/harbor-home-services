import { Flex, VStack, HStack, Text } from "@chakra-ui/react";

import { getSiteLinks } from "../getSiteLinks";

export interface NDProps {
  openDrawer: boolean;
  directories: string[];
}

export const NavDrawer = ({ openDrawer, directories }: NDProps) => {
  if (openDrawer) {
    return (
      <Flex
        flexDir="column"
        bgColor="pBlue"
        color="white"
        pt={[16, null, 20, null]}
        pb={32}
        px={10}
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
      >
        <VStack spacing={[6, null, 12]} h="max-content" w="100%">
          <Text w="100%" fontSize={16} fontWeight="bold" color="whiteAlpha.600">
            Menu
          </Text>
          {getSiteLinks(directories, true)}
        </VStack>

        <VStack spacing={3} w="100%" mt="auto">
          <Text w="100%" fontSize={16} fontWeight="bold" color="whiteAlpha.600">
            Social
          </Text>
          <HStack spacing={12} w="100%">
            <Text>Facebook</Text>
            <Text>Instagram</Text>
          </HStack>
        </VStack>
      </Flex>
    );
  }

  return null;
};
