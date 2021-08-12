import { Flex, Text } from "@chakra-ui/react";

export interface ILProps {
  text?: string;
  items: string[];
}

export const InlineList = ({ items, text }: ILProps) => {
  return (
    <Flex w={["100%", null, "85%", "90%"]} h="100%" flexDir="column" align="center" mt={20} mb={10}>
      {text && (
        <Text color="#353535" fontWeight="bold" fontSize={30} letterSpacing={-2}>
          {text}
        </Text>
      )}
      <Flex w="100%" h="100%" justify="center" flexWrap="wrap">
        {items.map((value, idx) => (
          <Flex key={idx} mt={3}>
            <Text fontSize={15}>{value}</Text>
            <Flex w="2px" h="100%" bgColor="pAqua" mx={2} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
