import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { ToggledInputField } from "./ToggledInputField";

import type { CBProps } from "../utils/form-types";

export const CheckboxTags = (props: CBProps) => {
  const { withInputField = false, isInvalid = false } = props;

  const [selectedTags, setselectedTags] = useState(new Set<number>());
  const [itemList, setItemList] = useState(props.items);

  const handleTagSelect = (index: number) => {
    let updatedSelectedTags = new Set<number>(selectedTags);

    if (!selectedTags.has(index)) {
      updatedSelectedTags.add(index);
    } else {
      updatedSelectedTags.delete(index);
    }

    setselectedTags(updatedSelectedTags);
  };

  const handleNewTagAdd = (value: string) => {
    setItemList([...itemList, value]);
    handleTagSelect(itemList.length);
  };

  useEffect(() => {
    props.onCheckboxChange(Array.from(selectedTags.values()).map((value) => itemList[value]));
  }, [selectedTags]);

  return (
    <>
      <Flex w="100%" flexWrap="wrap" mt={-2}>
        {itemList.map((value, idx) => (
          <Flex
            key={idx}
            flexGrow={1}
            align="center"
            justify="center"
            borderRadius={20}
            whiteSpace="nowrap"
            maxW="min-content"
            py={2}
            px={4}
            mt={2}
            mx={0.5}
            cursor="pointer"
            bgColor={selectedTags.has(idx) ? "pAqua" : "blackAlpha.50"}
            color={selectedTags.has(idx) ? "whiteAlpha.900" : "blackAlpha.900"}
            border={isInvalid ? "2px solid red" : "2px solid white"}
            _hover={{ borderColor: "pAqua" }}
            onClick={() => handleTagSelect(idx)}
          >
            <Text fontSize={12}>{value}</Text>
          </Flex>
        ))}
      </Flex>
      {withInputField && (
        <ToggledInputField onSubmit={(value) => value.length && handleNewTagAdd(value)} />
      )}
    </>
  );
};
