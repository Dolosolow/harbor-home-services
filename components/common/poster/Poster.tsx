import { VStack, Text, Flex } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

import { ImageBackground } from "@/components/common/image-background";
import { EmailForm } from "./EmailForm";
export interface PProps extends Omit<ContainerProps, "maxH" | "maxW"> {
  imgsrc: string;
  headText: string;
  subText: string;
  btnText?: string;
  withButton?: boolean;
}

export const Poster = ({ btnText = "Submit", withButton = true, ...props }: PProps) => {
  const { imgsrc, headText, subText, ...restProps } = props;

  return (
    <Flex {...restProps}>
      <ImageBackground
        src={props.imgsrc}
        containerProps={{
          w: ["95%", null, "95%", "85%"],
          h: ["450px", null, "380px"],
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <VStack
          w="100%"
          h="100%"
          align="flex-start"
          justify="center"
          p={[4, null, 14]}
          spacing={[6, null, 8, null]}
        >
          <Text
            color="#fafafa"
            fontSize={[28, null, 32, 40]}
            fontWeight="bold"
            letterSpacing={-1}
            w={["95%", null, "600px", "60%"]}
          >
            {props.headText}
          </Text>
          <Text fontSize={[15, null, 16]} color="pGray" w={["95%", null, null, null, "50%"]}>
            {props.subText}
          </Text>
          <EmailForm btnText="submit" />
        </VStack>
      </ImageBackground>
    </Flex>
  );
};
