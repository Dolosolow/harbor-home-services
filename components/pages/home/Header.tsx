import { Flex } from "@chakra-ui/react";

import { Card } from "@/components/common/card";
import { ChakraNextImage } from "@/components/common/chakra-next-image";
import { CheckList } from "@/components/common/check-list";

type HeaderContent = {
  imgSrc: string;
  alt: string;
  text: string;
  subText?: string;
};
export interface HProps {
  content: HeaderContent;
  includeLinkButton?: boolean;
  buttonText?: string;
}

export const Header = ({
  buttonText,
  includeLinkButton = false,
  content: { text, subText, imgSrc },
}: HProps) => {
  return (
    <Flex
      w="100%"
      h={["100%", null, null, null, "95vh"]}
      flexDir={["column", null, null, "row"]}
      pt={[28, null, null, 20, 0]}
    >
      <Flex
        w={["100%", null, null, "49%"]}
        px={[4, null, null, null, 20]}
        pb={10}
        flexDir="column"
        align="flex-start"
        justify="flex-end"
      >
        <Card
          dark
          includeLinkButton={includeLinkButton}
          text={text}
          subText={subText}
          buttonText={buttonText}
          containerStyles={{ w: "100%" }}
        />
        <CheckList
          flexDir="column"
          py={[4, null, 5, 5]}
          align="flex-start"
          texts={[
            "Experienced Specialists",
            "Insured, Liability Insurance",
            "Done on time and on budget",
          ]}
        />
      </Flex>
      <Flex
        h="100%"
        w={["100%", null, null, "51%"]}
        align="flex-end"
        justify="flex-start"
        pb={10}
        pl={4}
        pr={[4, null, 0]}
      >
        <Flex
          w={["100%", null, "740px", "100%", null]}
          h="550px"
          backgroundColor="#fff"
          borderRadius={["15px", null, "20px", "30px 0 0 30px"]}
          overflow="hidden"
        >
          <ChakraNextImage priority src={imgSrc} objectFit="cover" w="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
};
