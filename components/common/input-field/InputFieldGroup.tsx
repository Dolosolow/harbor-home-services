import { Stack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";

interface IFGProps extends StackProps {
  children: React.ReactNode;
}

export const InputFieldGroup = ({ children, ...props }: IFGProps) => {
  return (
    <Stack w="100%" {...props}>
      {children}
    </Stack>
  );
};
