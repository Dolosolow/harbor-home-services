import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { BoxProps } from "@chakra-ui/react";

import { ChakraNextImage } from "@/components/common/chakra-next-image";
import { selectedElementProps } from "./style";

export interface MIIProps {
  layoutId: number;
  src: string;
  onItemClick: () => void;
  togglePresence?: boolean;
}

const MotionImg = motion<BoxProps>(Box);

export const MosaicItem = ({ layoutId, src, onItemClick, togglePresence = false }: MIIProps) => {
  return (
    <MotionImg
      layoutId={`${layoutId}`}
      background="transparent"
      borderRadius="4px"
      boxShadow="rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem"
      cursor="pointer"
      h="100%"
      w="100%"
      onClick={onItemClick}
      {...(togglePresence && (selectedElementProps as any))}
    >
      <ChakraNextImage src={src} alt="mosaic gallery image" objectFit="cover" w="100%" h="100%" />
    </MotionImg>
  );
};
