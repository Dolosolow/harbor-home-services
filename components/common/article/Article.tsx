import { Flex } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";

import { defaultInnerContainerProps, getDefaultChildrenProps, getDefaultProps } from "./style";
interface AProps {
  renderLeftSideComponent?: React.ReactNode;
  renderRightSideComponent?: React.ReactNode;
  alternateSides?: boolean;
  containerStyles?: FlexProps;
  leftSideStyles?: FlexProps;
  RightSideStyles?: FlexProps;
}

export const Article = ({ containerStyles, alternateSides = false, ...props }: AProps) => {
  const defaultContainerProps = getDefaultProps(containerStyles || {});

  const renderArticleSides = () => {
    const { defaultLeftProps, defaultRightProps } = getDefaultChildrenProps(alternateSides);
    const leftSideProps = Object.assign(defaultLeftProps, props.leftSideStyles);
    const rightSideProps = Object.assign(defaultRightProps, props.RightSideStyles);

    return (
      <>
        {props.renderLeftSideComponent && (
          <Flex {...leftSideProps}>{props.renderLeftSideComponent}</Flex>
        )}
        {props.renderLeftSideComponent && (
          <Flex {...rightSideProps}>{props.renderRightSideComponent}</Flex>
        )}
      </>
    );
  };

  return (
    <Flex {...defaultContainerProps}>
      <Flex {...defaultInnerContainerProps}>{renderArticleSides()}</Flex>
    </Flex>
  );
};
