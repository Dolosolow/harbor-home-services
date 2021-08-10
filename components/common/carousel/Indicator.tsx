import { Center, HStack, Flex } from "@chakra-ui/react";

interface IProps {
  activeIndex: number;
  size: number;
}

export const Indicator = ({ activeIndex, size }: IProps) => {
  const renderIndicators = () => {
    return Array(size)
      .fill({})
      .map((_, idx) => (
        <Flex
          key={idx}
          bgColor="#d4d4d4"
          h="8px"
          w={[activeIndex === idx ? "25px" : "10px", null, activeIndex === idx ? "35px" : "15px"]}
          borderRadius={["10px", null, "15px"]}
          transition="width 0.4s ease-in-out"
        />
      ));
  };

  return (
    <Center mt={4}>
      <HStack>{renderIndicators()}</HStack>
    </Center>
  );
};
