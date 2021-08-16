import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { ChakraNextImage } from "@/components/common/chakra-next-image";

export const FormSubmitted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 300);
  }, []);

  return (
    <Flex w="100%" h="100vh">
      <Flex
        align="center"
        flexDir="column"
        w="100%"
        h="100%"
        mt={[-20, null, 0]}
        opacity={mounted ? "1" : "0"}
        transition="all 1.8s ease-in-out"
      >
        <ChakraNextImage
          src="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1635195518/hhs-images/consultate_yy3tv5.webp"
          h="300px"
          w="300px"
          mt={32}
        />
        <Text
          fontWeight={500}
          transform={mounted ? "translateY(0)" : "translateY(50px)"}
          transition="all 1s ease-in-out"
        >
          All good! Your message was sent
        </Text>
        <Text
          fontSize={13}
          transform={mounted ? "translateY(0)" : "translateY(50px)"}
          transition="all 1s 200ms ease-in-out"
        >
          We are excited to working with you soon. Expect a reply within 24hrs.
        </Text>
      </Flex>
    </Flex>
  );
};
