import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

import { CardList } from "@/components/pages/home/CardList";
import { Headline } from "@/components/common/headline";
import { TextBlock } from "@/components/common/text-block";

export const ServiceCards = ({ content }: { content: Array<{ title: string }> }) => {
  return (
    <Flex
      align="center"
      direction="column"
      shrink={0}
      h="100%"
      w="100vw"
      position="relative"
      pt={[16, null, null, 16]}
      mt={["-5px", null, "-20px", null, "130px"]}
      backgroundColor="#0da2f50a"
    >
      <Headline caption="Harbor Home Services" title="Services" />
      <TextBlock
        text="Harbor Home proudly has been serving North New Jersey and surrounding areas with one of the
      best services in the area. People love working with us, we don't cut corners, we are
      accurate, professional and do our job fast."
      />

      <CardList data={content} />
      <Link href="/services">
        <Button color="white" size="md" variant="primary" alignSelf="center" my={20}>
          View more Services
        </Button>
      </Link>
    </Flex>
  );
};
