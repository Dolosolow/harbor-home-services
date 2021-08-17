import sgMail from "@sendgrid/mail";
import type { MailService, MailDataRequired, ResponseError } from "@sendgrid/mail";

export default class SGMailProvider {
  private mailClient: MailService = sgMail;

  constructor() {
    this.mailClient.setApiKey(process.env.SENDGRID_KEY as string);
  }

  async sendMail(message: MailDataRequired) {
    try {
      await this.mailClient.send(message);
    } catch (err) {
      if ((err as ResponseError).response) {
        throw Error((err as ResponseError).response.body);
      }
    }
  }
}
