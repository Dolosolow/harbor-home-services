import { VStack, HStack } from "@chakra-ui/react";

import { LogoIcon } from "@/components/icons/LogoIcon";
import { FBIcon } from "@/components/icons/FBIcon";
import { IGIcon } from "@/components/icons/IGIcon";

export const LogoColumn = () => (
  <VStack
    w={["100%", null, "33.3%"]}
    h="100%"
    spacing={[3, null, 4]}
    mt={[-4, null, -5]}
    pl={[0]}
    align="center"
  >
    <LogoIcon w={["150px", null, "220px"]} h={["100px", null, "120px"]} color="whiteAlpha.900" />
    <HStack spacing={5} w="90%" justify="center">
      <FBIcon color="pAqua" boxSize={[7, null, 5, null]} />
      <IGIcon color="pAqua" boxSize={[7, null, 5, null]} />
    </HStack>
  </VStack>
);
