import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import { ChakraNextImage } from "@/components/common/chakra-next-image";
import { content } from "@/lang/en-home";

export const ContactLocation = () => {
  const { html } = content;
  const [isHovered, setIsHovered] = useState(false);

  const onHoverEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHovered(true);
  };

  const onHoverExit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHovered(false);
  };

  return (
    <Flex
      h="100%"
      w="100%"
      position="relative"
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverExit}
      overflow="hidden"
    >
      <Flex
        bgColor="#121212b2"
        border="1px solid #ffffff67"
        borderRadius={8}
        fontSize={14}
        flexDir="column"
        position="absolute"
        p={4}
        top={[14, null, 20, 500, 450]}
        left={[200, 160, 280, 140, 200]}
        zIndex={10}
        opacity={isHovered ? 1 : 0}
        transform={isHovered ? "scale(1)" : "scale(0)"}
        transformOrigin="top left"
        transition="all 0.4s ease-in-out"
      >
        <Text color="white">{html.meta.phone}</Text>
        <Text color="white">{html.meta.address}</Text>
        <Text color="white">{html.meta.city}</Text>
      </Flex>
      <ChakraNextImage
        priority
        alt="custom street map"
        src="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1641681152/hhs-images/loc_yeshte.png"
        h={["150%", null, null, "100%"]}
        w="100%"
        objectFit="cover"
      />
    </Flex>
  );
};
