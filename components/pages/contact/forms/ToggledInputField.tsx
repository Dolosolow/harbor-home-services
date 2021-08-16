import { Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

import { PlusIcon } from "@/components/icons/PlusIcon";

export const ToggledInputField = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyUp = (evt: React.KeyboardEvent) => {
    if (evt.code === "Enter") handleSubmit();
  };

  const handleSubmit = () => {
    setShowInput(false);
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <Flex
      align="center"
      mt={2}
      py={2}
      px={3}
      borderRadius={20}
      cursor="pointer"
      border="1px solid white"
      borderColor={showInput ? "black" : "white"}
      w="max-content"
      color="blackAlpha.500"
    >
      {!showInput ? (
        <>
          <PlusIcon boxSize={4} mr={3} />
          <Text fontSize={12} onClick={() => setShowInput(true)}>
            Can’t find what you are looking for? add it here.
          </Text>
        </>
      ) : (
        <>
          <Input
            fontSize={12}
            h="15px"
            variant="unstyled"
            placeholder="outdoor paint, plumbing..."
            borderRadius={20}
            py={0}
            px={2}
            w="240px"
            value={inputValue}
            onKeyUp={handleKeyUp}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="primary"
            borderRadius="20px"
            h="20px"
            minW="65px"
            fontSize={12}
            onClick={handleSubmit}
          >
            <Text ml={0.5}>{inputValue === "" ? "x" : "Add"}</Text>
          </Button>
        </>
      )}
    </Flex>
  );
};
