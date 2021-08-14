import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useState } from "react";
import type { StackProps } from "@chakra-ui/react";

import { formatPhoneString } from "@/components/pages/contact/utils/formatPhoneString";

interface IFProps {
  id: string;
  value: any;
  type?: string;
  isInvalid: boolean;
  errorMessage?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

interface IFGProps extends StackProps {
  children: React.ReactNode;
}

export const InputField = ({ isInvalid = false, type = "text", ...props }: IFProps) => {
  const [enableStringDivider, setEnableStringDivider] = useState(true);

  const handleKeyUp = (evt: React.KeyboardEvent) => {
    if (evt.code === "Backspace") {
      setEnableStringDivider(false);
    } else if (evt.code !== "Backspace") {
      setEnableStringDivider(true);
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      if (props.id === "phone") {
        evt.target.value = formatPhoneString(evt.target.value, enableStringDivider);
      }
      props.onChange(evt);
    }
  };

  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        type={type}
        id={props.id}
        placeholder={props.placeholder ?? undefined}
        value={props.value}
        onChange={handleChange}
        onBlur={props.onBlur}
        onKeyUp={props.id === "phone" ? handleKeyUp : undefined}
      />
      {props.errorMessage && isInvalid && <FormErrorMessage>{props.errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
