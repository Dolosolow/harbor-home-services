import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { getAllServices } from "@/utils/getAllServices";
import type { CFCProps } from "@/components/pages/contact/ContactForm";

const DynamicContactForm = dynamic<CFCProps>(() =>
  import("../../components/pages/contact/ContactForm").then((mod) => mod.ContactForm)
);

const services = getAllServices();

const Contact = () => {
  const onFormSubmit = () => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <div className="container container-contact">
      <Flex w="100%" h={["180px", null, "200px", "300px"]} filter={"brightness(80%)"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6046.86089752875!2d-74.03801177331022!3d40.730552967319426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25757a8442a35%3A0x279f6186597b157c!2sNewport%2C%20Jersey%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1642226915708!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </Flex>
      <Flex align="center" justify="center" pb={20} flex={1} w="100%">
        <DynamicContactForm services={services} onFormSubmit={onFormSubmit} />
      </Flex>
    </div>
  );
};

export default Contact;
