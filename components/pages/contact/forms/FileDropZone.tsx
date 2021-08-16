import { Flex, Text } from "@chakra-ui/react";

import { DragDropZone } from "@/components/pages/contact/forms/DragDropZone";

export const FileDropZone = ({
  setFieldValue,
}: {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}) => (
  <Flex w="100%" flexDirection="column">
    <Text mb={2} fontSize={12} fontWeight={400} color="blackAlpha.600">
      Any images you may have for your project? (4 files max)
    </Text>
    <DragDropZone onChange={(files) => setFieldValue("project_images", files)} />
  </Flex>
);
