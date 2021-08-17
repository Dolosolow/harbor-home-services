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
          w: ["95%", null, null, "85%"],
          h: "350px",
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
            fontSize={[28, null, 32]}
            fontWeight="bold"
            letterSpacing={-1}
            w={["320px", null, "450px"]}
          >
            {props.headText}
          </Text>
          <Text fontSize={[14, null, 15]} color="pGray" w={"380px"}>
            {props.subText}
          </Text>
          <EmailForm btnText="submit" />
        </VStack>
      </ImageBackground>
    </Flex>
  );
};
