import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { getAllServices } from "@/utils/getAllServices";
import type { CFCProps } from "@/components/pages/contact/ContactForm";

const DynamicContactForm = dynamic<CFCProps>(() =>
  import("../../components/pages/contact/ContactForm").then((mod) => mod.ContactForm)
);
const DynamicLocation = dynamic<{}>(() =>
  import("../../components/pages/contact/ContactLocation").then((mod) => mod.ContactLocation)
);

const services = getAllServices();

const Contact = () => {
  const onFormSubmit = () => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <div className="container container-contact">
      <Flex
        bgColor="white.700"
        align="center"
        justify="center"
        pb={20}
        flex={1}
        w={["100%", null, null, "50%"]}
        order={[2, null, null, 1]}
      >
        <DynamicContactForm services={services} onFormSubmit={onFormSubmit} />
      </Flex>
      <Flex
        w="100%"
        flex={["auto", null, null, 1]}
        h={["200px", null, "300px", "1250px"]}
        order={[1, null, null, 2]}
      >
        <DynamicLocation />
      </Flex>
    </div>
  );
};

export default Contact;
