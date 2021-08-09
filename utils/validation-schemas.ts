import * as yup from "yup";

export const inquirySchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .when("contact_method", { is: "call", then: yup.string().required() })
    .when("contact_method", { is: "text", then: yup.string().required() }),
  contact_method: yup.mixed().oneOf(["email", "call", "text"]).required(),
  selectedServices: yup.array().of(yup.string()).min(1).required(),
  project_description: yup.string(),
});

export const posterEmailSchema = yup.object().shape({
  email: yup.string().email().required(),
});
