import { Flex, Text, Center } from "@chakra-ui/react";

import { ContactColumn } from "./ContactColumn";
import { DirectoryColumn } from "./DirectoryColumn";
import { LogoColumn } from "./LogoColumn";

export interface FProps {
  directories: string[];
  watermark: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    city: string;
  };
}

export const Footer = ({ directories, watermark, contactInfo }: FProps) => (
  <Flex
    w="100%"
    h={["100%", null, "400px"]}
    flexDir="column"
    align="center"
    justify="center"
    pt={12}
    bgColor="#060e1f"
    boxSizing="content-box"
  >
    <Flex w={["90%", null, "95%", "85%"]} flex="6" flexDir={["row", "column", "row"]}>
      <ContactColumn
        phone={contactInfo.phone}
        email={contactInfo.email}
        street={contactInfo.address}
        city={contactInfo.city}
      />
      <DirectoryColumn directories={directories} />
      <LogoColumn />
    </Flex>
    <Center w="100%" flex="1" mb={[5, null, 0]} mt={10}>
      <Text color="pGray" fontSize="9px">
        {watermark}
      </Text>
    </Center>
  </Flex>
);
