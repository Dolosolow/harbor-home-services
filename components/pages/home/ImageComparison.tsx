import dynamic from "next/dynamic";
import { Flex, Button } from "@chakra-ui/react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

import { TextBlock } from "@/components/common/text-block";
import type { HLProps } from "@/components/common/headline";
import type { MTProps } from "@/components/common/mosaic";

import { content } from "@/lang/en-home";

const DynamicHeadline = dynamic<HLProps>(() =>
  import("../../common/headline").then((mod) => mod.Headline)
);
const DynamicMosaicTiles = dynamic<MTProps>(() =>
  import("../../common/mosaic").then((mod) => mod.MosaicTiles)
);

const images = [
  "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633499446/hhs-images/backyard_lbszvb.jpg",
  "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633499446/hhs-images/livingspace_oixmb2.jpg",
  "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633499582/hhs-images/modern-backyard_y6ztwo.jpg",
  "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633499445/hhs-images/backyard-2_edwirh.jpg",
  "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633499446/hhs-images/livingspace-2_gqd1sz.jpg",
];

export const ImageComparison = () => (
  <Flex
    align="center"
    direction="column"
    justify="flex-start"
    shrink={0}
    bgColor="#0da2f50a"
    bgPos="center"
    bgRepeat="repeat"
    bgSize="contain"
    position="relative"
    pb={10}
    h="100%"
    w="100vw"
  >
    <DynamicHeadline caption="Harbor Home Services" title="Projects" />
    <TextBlock text={content.comparison_section} />
    <Flex h="100%" w={["100%", "100%", "80%"]} justify="center">
      <ReactCompareSlider
        style={{ width: "100%" }}
        onlyHandleDraggable
        position={75}
        itemOne={
          <ReactCompareSliderImage
            style={{ objectFit: "cover" }}
            src="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633501520/hhs-images/before-r_pymsx5.webp"
            srcSet="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633501520/hhs-images/before-r_pymsx5.webp"
            alt="before renovation"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            style={{ objectFit: "cover" }}
            src="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633501502/hhs-images/after-r_wddydv.webp"
            srcSet="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633501502/hhs-images/after-r_wddydv.webp"
            alt="after renovation"
          />
        }
      />
    </Flex>
    <Button color="white" size="md" variant="primary" my={20}>
      View more Projects
    </Button>
    <DynamicMosaicTiles images={images} gridContainerStyles={{ mb: [10] }} />
  </Flex>
);
