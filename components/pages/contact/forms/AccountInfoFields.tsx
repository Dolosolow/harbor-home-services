import { Select } from "@chakra-ui/react";
import type { FormikErrors, FormikTouched } from "formik";

import { InputFieldGroup, InputField } from "@/components/common/input-field";

import type { FormValues } from "../../../../global";

interface AIFProps {
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  values: FormValues;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export const AccountInfoFields = ({ values, errors, touched, ...props }: AIFProps) => {
  return (
    <>
      <InputFieldGroup>
        <InputField
          id="name"
          placeholder="Name"
          value={values.name}
          isInvalid={(errors.name && touched.name) as boolean}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
        <InputField
          type="email"
          id="email"
          placeholder="Email"
          value={values.email}
          isInvalid={(errors.email && touched.email) as boolean}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
      </InputFieldGroup>
      <InputFieldGroup isInline>
        <Select
          isInvalid={(errors.contact_method && touched.contact_method) as boolean}
          placeholder="Contact method"
          borderRadius={5}
          fontSize={14}
          value={values.contact_method}
          onChange={(e) => props.setFieldValue("contact_method", e.target.value)}
        >
          <option value="call">Call</option>
          <option value="email">Email</option>
          <option value="text">Text</option>
        </Select>
        <InputField
          type="tel"
          id="phone"
          placeholder="Phone"
          value={values.phone}
          isInvalid={(errors.phone && touched.phone) as boolean}
          onBlur={props.onBlur}
          onChange={(evt) => props.setFieldValue("phone", evt.target.value)}
        />
      </InputFieldGroup>
    </>
  );
};
