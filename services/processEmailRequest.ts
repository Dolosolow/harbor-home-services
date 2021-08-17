import { NextApiRequest, NextApiResponse } from "next";
import { ValidationError } from "yup";
import type { FormikErrors } from "formik";

import { inquirySchema } from "@/utils/validation-schemas";
import SGMailProvider from "@/utils/api/SGMailProvider";
import type { FormValues } from "../global";

export const processEmailRequest = async (
  req: NextApiRequest & { files: Array<any> },
  res: NextApiResponse
) => {
  console.log("email api request received\n");
  const sgMail = new SGMailProvider();
  let attachments: Array<any> = [];

  const formValues = req.body.formValues;
  const formFiles = req.files;

  attachments = formFiles.map((file) => {
    return {
      content: file.buffer.toString("base64"),
      filename: file.originalname,
      type: "image/jpeg",
      diposition: "attachment",
    };
  });

  try {
    const validatedData = await inquirySchema.validate(formValues, { abortEarly: false });
    const newInquiry = Object.assign(validatedData, {
      phone: validatedData.phone ?? "–––––––––––––",
      selectedServices: validatedData.selectedServices.join(", "),
    });

    delete newInquiry["project_images"];

    await sgMail.sendMail({
      from: process.env.CLIENT_SENDER_EMAIL as string,
      to: newInquiry.email,
      templateId: process.env.SENDGRID_EMAIL_TEMPLATE_ID as string,
      dynamicTemplateData: newInquiry,
      attachments,
    });

    return res.status(200).send(`email has successfully been sent`);
  } catch (err) {
    if (err instanceof ValidationError) {
      let error: FormikErrors<FormValues> = {};

      err.inner.map((e) => {
        let formattedError: { [key: string]: string } = {};
        formattedError[e.path!] = e.errors[0];
        error = { ...formattedError };
      });

      return res.status(400).send(error);
    } else {
      return res.status(401).send(`email has failed to be sent`);
    }
  }
};
