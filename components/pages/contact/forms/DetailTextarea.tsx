import { FormControl, Text, Textarea } from "@chakra-ui/react";

interface DTAProps {
  id: string;
  value: string;
  label: string;
  isInvalid: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const DetailTextarea = ({ isInvalid = false, ...props }: DTAProps) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Text pb={3} fontSize={12} fontWeight={400} color="blackAlpha.600">
        {props.label}
      </Text>
      <Textarea
        h="150px"
        id="project_description"
        placeholder="Write about your project"
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  );
};
