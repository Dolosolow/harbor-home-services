import { Container, Box } from "@chakra-ui/react";
import type { ContainerProps, BoxProps, ImageProps } from "@chakra-ui/react";
import React from "react";

import { ChakraNextImage } from "@/components/common/chakra-next-image";

interface IBProps extends ImageProps {
  children: React.ReactNode;
  containerProps?: Omit<ContainerProps, "maxH" | "maxW">;
  imageProps?: Omit<BoxProps, "bgImage" | "zIndex">;
  withOverlay?: boolean;
  priority?: boolean;
}

export const ImageBackground = ({
  children,
  containerProps,
  imageProps,
  objectFit,
  priority = false,
  withOverlay = true,
  ...props
}: IBProps) => {
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...child.props, position: "absolute", zIndex: 2 });
      }
      return child;
    });
  };

  return (
    <Container
      display="flex"
      maxH="100vh"
      maxW="100vw"
      pos="relative"
      p={containerProps?.p || 0}
      h={containerProps?.h || "100%"}
      w={containerProps?.w || "100%"}
      {...containerProps}
    >
      {renderChildren()}
      {withOverlay && <Box w="100%" h="100%" bgColor="#060e1f7a" pos="absolute" zIndex={1} />}
      <ChakraNextImage
        src={props.src}
        alt={props.alt}
        h={imageProps?.h || imageProps?.height || "100%"}
        w={imageProps?.w || imageProps?.width || "100%"}
        objectFit="cover"
        priority={priority}
        zIndex={0}
      />
    </Container>
  );
};
