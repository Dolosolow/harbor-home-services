import { VStack, Text, Flex } from "@chakra-ui/react";

import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { AtIcon } from "@/components/icons/AtIcon";
import { LocIcon } from "@/components/icons/LocIcon";

export const ContactColumn = (props: {
  phone: string;
  email: string;
  street: string;
  city: string;
}) => (
  <VStack w={["100%", null, "33.3%", null]} h="100%" spacing={8} align="flex-start">
    <Text
      color="pAqua"
      fontSize="16px"
      fontWeight="500"
      letterSpacing={2}
      textTransform="uppercase"
    >
      contact us
    </Text>
    <Flex>
      <PhoneIcon color="pAqua" boxSize={4} mr={4} mt={2} />
      <Text color="pGray" fontSize="14px" noOfLines={2}>
        Phone Number:
        <br />
        {props.phone}
      </Text>
    </Flex>
    <Flex align="center">
      <AtIcon color="pAqua" boxSize={4} mr={4} />
      <Text color="pGray" fontSize="14px" noOfLines={2}>
        {props.email}
      </Text>
    </Flex>
    <Flex>
      <LocIcon color="pAqua" boxSize={4} mr={4} mt={2} />
      <Text color="pGray" fontSize="14px" noOfLines={2}>
        {props.street}
        <br />
        {props.city}
      </Text>
    </Flex>
  </VStack>
);
