import { Flex, Text } from "@chakra-ui/react";

interface HCasualProps {
  caption: string;
  title: { color: string; coloredText: string; text: string };
  color?: string;
  descriptor?: string;
}

interface HMinimalProps {
  caption: string;
  title: string;
  color?: string;
  descriptor?: never;
}

export type HLProps = HCasualProps | HMinimalProps;

function isCasualProps(props: HLProps): props is HCasualProps {
  return "descriptor" in props;
}

export const Headline = (props: HLProps) => {
  const renderHeadline = () => {
    switch (isCasualProps(props)) {
      case true:
        const casualProps = props as HCasualProps;

        return (
          <Flex
            w="100%"
            flexDir="column"
            color="#353535"
            borderTopLeftRadius={15}
            borderBottomLeftRadius={15}
            align="center"
          >
            <Text
              fontSize={18}
              fontWeight="bold"
              textTransform="uppercase"
              color={casualProps.title.color}
              letterSpacing={-1}
            >
              {casualProps.descriptor}
            </Text>
            <Text fontSize={[38, null, 45]} fontWeight="bold" letterSpacing={-2}>
              <>
                <Text as="span" display="inline" color={casualProps.title.color || "#121212"}>
                  {casualProps.title.coloredText}
                </Text>{" "}
                {casualProps.title.text}
              </>
            </Text>
            <Text
              textAlign="center"
              fontSize={[15, null, 18, null, 20]}
              fontWeight={500}
              color="#4636369d"
            >
              {casualProps.caption}
            </Text>
          </Flex>
        );
      case false:
        const minimalProps = props as HMinimalProps;

        return (
          <>
            <Text
              alignSelf="center"
              color="pAqua"
              fontSize={[12, null, 15]}
              fontWeight={700}
              letterSpacing={3}
              textTransform="uppercase"
              zIndex={10}
            >
              {minimalProps.caption}
            </Text>
            <Text
              alignSelf="center"
              color={minimalProps.color || "#121212"}
              fontSize={[38, null, 45]}
              fontWeight={900}
              letterSpacing={8}
              textTransform="uppercase"
              zIndex={10}
            >
              {minimalProps.title}
            </Text>
          </>
        );
    }
  };

  return renderHeadline();
};
