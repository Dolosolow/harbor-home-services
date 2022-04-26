import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

import { CardList } from "@/components/pages/home/CardList";
import { Headline } from "@/components/common/headline";
import { TextBlock } from "@/components/common/text-block";

import { content as langContent } from "@/lang/en-home";

export const ServiceCards = ({ content }: { content: Array<{ title: string }> }) => {
  return (
    <Flex
      h="100%"
      w="100vw"
      pt={[16, null, null, 16]}
      mt={["-5px", null, "-20px", null, "130px"]}
      backgroundColor="#0da2f50a"
    >
      <Flex
        w="100%"
        h="100%"
        maxW="1440px"
        margin="auto"
        shrink={0}
        direction="column"
        align="center"
        position="relative"
      >
        <Headline caption="Harbor Home Services" title="Services" />
        <TextBlock text={langContent.services_section} />

        <CardList data={content} />
        <Link href="/services">
          <Button color="white" size="md" variant="primary" alignSelf="center" my={20}>
            View more Services
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
