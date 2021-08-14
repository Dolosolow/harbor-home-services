import { Flex, FormLabel } from "@chakra-ui/react";

import { CheckboxTags } from "./CheckboxTags";

import type { CBProps } from "../utils/form-types";

export const CheckboxContainer = (props: CBProps) => {
  const { withInputField = false, isInvalid = false } = props;

  return (
    <Flex w="100%" flexDir="column">
      <Flex w="100%" flexDir="column">
        <FormLabel htmlFor="name" fontSize={12} fontWeight={400} color="blackAlpha.600" mb={2.5}>
          {props.label}
        </FormLabel>
        <CheckboxTags
          isInvalid={isInvalid}
          withInputField={withInputField}
          items={props.items}
          onCheckboxChange={(selectedItems) => props.onCheckboxChange(selectedItems)}
        />
      </Flex>
    </Flex>
  );
};
