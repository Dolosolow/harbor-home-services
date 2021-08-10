import { Flex, Center, Text } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";

import { CheckIcon } from "@/components/common/icons/CheckIcon";

interface CLProps extends FlexProps {
  texts: string[];
}

export const CheckList = ({ texts, ...props }: CLProps) => (
  <Flex {...props}>
    {texts.map((text, idx) => (
      <Center key={idx} py={3}>
        <CheckIcon color="pAqua" />
        <Text fontSize={16} fontWeight={500} ml={3}>
          {text}
        </Text>
      </Center>
    ))}
  </Flex>
);
