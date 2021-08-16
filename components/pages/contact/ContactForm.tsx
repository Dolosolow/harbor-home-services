import { VStack, Flex, Button } from "@chakra-ui/react";
import { withFormik } from "formik";
import { useEffect } from "react";
import type { FormikProps } from "formik";

import { FormSubmitted } from "@/components/pages/contact/FormSubmitted";
import { Header } from "@/components/pages/contact/Header";
import { AccountInfoFields } from "./forms/AccountInfoFields";
import { CheckboxContainer } from "./forms/CheckboxContainer";
import { FileDropZone } from "./forms/FileDropZone";

import { inquirySchema as validationSchema } from "@/utils/validation-schemas";
import type { FormValues } from "../../../global";

export interface CFCProps {
  services: string[];
  onFormSubmit: () => void;
}

const ContactFormContainer = (props: FormikProps<FormValues> & CFCProps) => {
  const { values, touched, errors } = props;

  const preventKeySubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.code === "Enter") e.preventDefault();
  };

  useEffect(() => {
    if (props.status !== undefined) {
      setTimeout(() => {
        props.resetForm();
      }, 6500);
    }
  }, [props.status]);

  useEffect(() => {
    if (props.isSubmitting && errors) props.onFormSubmit();
  }, [props.isSubmitting]);

  const renderForm = () => (
    <Flex flexDir="column" w={["90%", null, null, "80%"]} maxW="650px" h="100%">
      <Header />
      <form onSubmit={props.handleSubmit} onKeyDown={preventKeySubmit}>
        <VStack pt={6} spacing={5}>
          <AccountInfoFields
            values={values}
            errors={errors}
            touched={touched}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            setFieldValue={props.setFieldValue}
          />
          <CheckboxContainer
            withInputField
            items={props.services}
            isInvalid={(errors.selectedServices && touched.selectedServices) as boolean}
            label="Select below any service that best applies to your project(s)."
            onCheckboxChange={(selectedItems) => {
              selectedItems.length && props.setFieldValue("selectedServices", selectedItems);
            }}
          />
          <FileDropZone setFieldValue={props.setFieldValue} />
        </VStack>
        <Flex w="100%" justify="flex-end" mt={16}>
          <Button
            isLoading={props.isSubmitting}
            loadingText="sending"
            type="submit"
            variant="primary"
            alignSelf="flex-end"
          >
            Send Message
          </Button>
        </Flex>
      </form>
    </Flex>
  );

  return props.status ? <FormSubmitted /> : renderForm();
};

export const ContactForm = withFormik<CFCProps, FormValues>({
  mapPropsToValues: () => {
    return {
      email: "",
      name: "",
      phone: "",
      contact_method: undefined,
      project_description: "",
      project_images: [],
      selectedServices: [],
    };
  },
  handleSubmit: async (values, { setErrors, setStatus, props }) => {
    let formValues: FormValues = { ...values, phone: values.phone.split("-").join("") };
    const formdata = new FormData();

    if (formValues.project_images) {
      formValues.project_images.forEach((base64String) => {
        formdata.append("files", base64String);
      });
      formValues = Object.assign(formValues, { project_images: [] });
      formdata.append("formValues", JSON.stringify(formValues));
    }

    const response = await fetch("/api/email", {
      method: "post",
      mode: "cors",
      credentials: "same-origin",
      body: formdata,
    });

    props.onFormSubmit();

    if (response.status === 400) {
      const responseData = await response.json();
      setErrors(responseData);
    } else {
      setStatus({ submitted: true });
    }
  },
  validationSchema,
  validateOnBlur: false,
})(ContactFormContainer);
