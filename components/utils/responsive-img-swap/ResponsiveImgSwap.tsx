import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { ChakraNextImage } from "@/components/common/chakra-next-image";
import type { CProps } from "@/components/common/carousel";
import type { CIProps } from "@/components/common/carousel-item";

const DynamicCarousel = dynamic<CProps>(() =>
  import("../../common/carousel").then((mod) => mod.Carousel)
);
const DynamicCarouselItem = dynamic<CIProps>(() =>
  import("../../common/carousel-item").then((mod) => mod.CarouselItem)
);

export interface RISProps {
  mobile: boolean;
  mainImgSrc: string;
  carouselImgs: string[];
}

export const ResponsiveImgSwap = ({ mobile, mainImgSrc, carouselImgs }: RISProps) => (
  <>
    {mobile ? (
      <Flex position="absolute" top={[0, null, null, 20, 10]} right={[null, null, null, -130, -20]}>
        <ChakraNextImage
          alt="main image"
          src={mainImgSrc}
          height={[null, null, null, 500, 600]}
          width={800}
        />
      </Flex>
    ) : (
      <DynamicCarousel
        hideIndicators
        staticIndex={1}
        itemStyles={{ h: "100%", w: "50%", maxW: "200px" }}
        carouselStyles={{
          mt: 32,
          mb: [16, null, 24],
          transform: ["scale(1.5)", null, "scale(1.8)"],
        }}
      >
        {carouselImgs.map((imgsrc) => (
          <DynamicCarouselItem key={imgsrc}>
            <ChakraNextImage
              src={imgsrc}
              alt="carousel image item"
              objectFit="contain"
              h={300}
              w={280}
            />
          </DynamicCarouselItem>
        ))}
      </DynamicCarousel>
    )}
  </>
);
