import { Box } from "@chakra-ui/react";
import type { ImageProps } from "@chakra-ui/react";
import NextImage from "next/image";

export const ChakraNextImage = (props: ImageProps & { priority?: boolean }) => {
  const { src, alt, objectFit, objectPosition, priority = false, ...rest } = props;

  return (
    <Box pos="relative" {...rest}>
      <NextImage
        src={src as string}
        alt={alt}
        layout="fill"
        objectFit={(objectFit ?? "contain") as any}
        objectPosition={(objectPosition ?? undefined) as string}
        priority={priority}
        draggable={false}
      />
    </Box>
  );
};
