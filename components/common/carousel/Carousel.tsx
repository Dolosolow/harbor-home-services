import { useState, useRef, Children } from "react";
import { Flex } from "@chakra-ui/react";

import { addPropsToChildren } from "@/utils/addPropsToChildren";
import { Indicator } from "./Indicator";

import type { CProps } from "./index";

import {
  defaultCarouselContainerProps,
  defaultInnerContainerProps,
  defaultItemProps,
} from "./style";

export const Carousel = ({
  children,
  carouselStyles,
  itemStyles,
  staticIndex,
  ...props
}: CProps) => {
  const { hideIndicators = false } = props;
  const [activeIndex, setActiveIndex] = useState(staticIndex ? staticIndex : 0);
  const cursorRef = useRef<null | number>(null);

  const numOfItems = Children.count(children);

  const itemProps = Object.assign(defaultItemProps, itemStyles);
  const carouselProps = Object.assign(defaultCarouselContainerProps, carouselStyles);

  const onMouseDownEvent = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    cursorRef.current = evt.nativeEvent.x;
  };

  const onMouseUpEvent = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!staticIndex) {
      const nextIndex = activeIndex + 1;
      const prevIndex = activeIndex - 1;

      if (evt.nativeEvent.x < cursorRef.current! && nextIndex <= numOfItems - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (evt.nativeEvent.x > cursorRef.current! && prevIndex >= 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <Flex
      onMouseDownCapture={onMouseDownEvent}
      onMouseUpCapture={onMouseUpEvent}
      {...carouselProps}
    >
      <Flex
        {...defaultInnerContainerProps}
        transform={`translateX(${
          activeIndex === 0
            ? `${+itemProps.w!.split("%")[0]}`
            : `-${(activeIndex - 1) * +itemProps.w!.split("%")[0]}`
        }%)`}
      >
        {addPropsToChildren(children, itemProps)}
      </Flex>
      {!hideIndicators && <Indicator size={Children.count(children)} activeIndex={activeIndex} />}
    </Flex>
  );
};
