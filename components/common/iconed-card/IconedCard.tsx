import { Flex, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { ArrowRight } from "@/components/icons/ArrowRight";

import type { ICProps } from "./index";

export const IconedCard = ({ title, content, IconComponent, height, navLink = null }: ICProps) => {
  const formatContent = () => {
    return !content.includes(":") ? (
      <Text textAlign="center" fontSize={15} lineHeight={1.5} w="92%">
        {content}
      </Text>
    ) : (
      content.split(":").map((chunkContent) => (
        <Text pl={10} fontSize={15} lineHeight={1} w="92%">
          {chunkContent}
        </Text>
      ))
    );
  };

  return (
    <Flex
      flexDir="column"
      flexGrow={1}
      bgColor="#fafafa"
      border="1px solid #dbdbdb"
      borderRadius={6}
      pt={6}
      m="0 10px 20px 10px"
      h={height ?? ["280px", null, null, null, "320px"]}
      minW="314px"
      w={[
        "calc((100% / 1) - 20px)",
        "calc((100% / 2) - 20px)",
        null,
        null,
        "calc((100% / 3) - 20px)",
      ]}
    >
      <Flex justify="center" w="100%">
        {IconComponent}
      </Flex>

      <VStack w="100%" mt={3} spacing={[1, null, null, null, 5]} position="relative">
        <Text
          w="100%"
          textAlign="center"
          fontWeight={500}
          fontSize={20}
          letterSpacing={-1}
          color="#353535"
        >
          {title}
        </Text>
        {formatContent()}
        {navLink && (
          <Link href="/contact">
            <Flex align="center" justify="center" h="100%" w="100%">
              <Text cursor="pointer" color="pAqua" fontSize={15} fontWeight={500}>
                {navLink.placeholder}
              </Text>
              <Text cursor="pointer" as="span" pl={2} color="pAqua">
                <ArrowRight boxSize={5} />
              </Text>
            </Flex>
          </Link>
        )}
      </VStack>
    </Flex>
  );
};
