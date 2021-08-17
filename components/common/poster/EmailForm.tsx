import { Stack, FormControl, Input, Button, Text } from "@chakra-ui/react";
import { withFormik } from "formik";
import Router from "next/router";
import type { FormikProps } from "formik";

import { posterEmailSchema as validationSchema } from "@/utils/validation-schemas";

interface EFProps {
  btnText: string;
}

interface FormValues {
  email: string;
}

const FormContainer = (props: EFProps & FormikProps<FormValues>) => {
  const { values, errors, isValid, handleChange, handleBlur, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        // mt={[8, null, 14]}
        pt={5}
        direction={["column", null, "row", "row", "row"]}
        spacing={[8, null, 2, 2, 2]}
        position="relative"
        w="100%"
      >
        <FormControl isInvalid={!isValid} w={["300px"]}>
          {errors.email && (
            <Text pos="absolute" top={-6} color="whiteAlpha.500" fontSize={14}>
              {errors.email}
            </Text>
          )}
          <Input
            variant="filled"
            id="email"
            placeholder="Email"
            focusBorderColor="pAqua"
            w={["100%", null, "300px", "300px", "300px"]}
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            _focusVisible={{ color: "#fafafa" }}
          />
        </FormControl>
        <Button type="submit" color="white" variant="primary" px={8} w="135px">
          {props.btnText}
        </Button>
      </Stack>
    </form>
  );
};

export const EmailForm = withFormik<EFProps, FormValues>({
  mapPropsToValues: () => {
    return { email: "" };
  },
  handleSubmit: (values, { resetForm }) => {
    resetForm();
    Router.push({ pathname: "/contact", query: { email: values.email } });
  },
  validationSchema,
  validateOnBlur: false,
})(FormContainer);
