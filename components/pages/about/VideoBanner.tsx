import { Box, AspectRatio } from "@chakra-ui/react";
import type { BoxProps, AspectRatioProps } from "@chakra-ui/react";

export interface VBProps extends BoxProps {
  videosrc: string;
  videoContainer?: AspectRatioProps;
}

export const VideoBanner = ({ videosrc, videoContainer, ...props }: VBProps) => {
  const boxContainerProps = Object.assign(defaultContainerProps, props);
  const aspectRatioProps = Object.assign(videoContainer ?? {}, { maxH: "100%" });

  return (
    <Box {...boxContainerProps}>
      <AspectRatio ratio={1} {...aspectRatioProps}>
        <video src={videosrc} muted autoPlay loop height="100%" width="100%"></video>
      </AspectRatio>
    </Box>
  );
};

const defaultContainerProps: BoxProps = {
  borderRadius: [20, null, 15],
  mt: [12, null, 12],
  mb: 10,
  mr: [0, null, 10],
  overflow: "hidden",
  h: ["50%", "60vh", "400px"],
  w: ["96%", null, "100%"],
};
