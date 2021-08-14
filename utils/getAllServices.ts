import { content } from "@/lang/en-services";

export const getAllServices = () => {
  let services: Array<string> = content.otherServices;

  content.cards.forEach((service) => {
    services.push(service.title);
  });

  return services;
};
