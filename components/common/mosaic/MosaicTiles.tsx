import { useEffect, useState } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { Grid, GridItem } from "@chakra-ui/react";
import type { GridProps, GridItemProps } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import type { MIIProps } from "@/components/common/mosaic-item";

export interface MTProps {
  images: string[];
  gridContainerStyles?: Omit<GridProps, "gridTemplateColumns" | "gridAutoRows">;
}

const DynamicMosaicItem = dynamic<MIIProps>(() =>
  import("../mosaic-item").then((mod) => mod.MosaicItem)
);

const MotionGridItem = motion<GridItemProps>(GridItem);

export const MosaicTiles = ({ images, gridContainerStyles }: MTProps) => {
  const [collection, setCollection] = useState<null | JSX.Element[]>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const mosaicItems = images.map((img, idx) => {
      return (
        <MotionGridItem
          key={idx}
          rowSpan={idx === 1 ? 2 : 1}
          colSpan={idx === 1 || (idx > 1 && idx % 2 === 0) ? 2 : 1}
        >
          <DynamicMosaicItem layoutId={idx} src={img} onItemClick={() => onItemClick(idx)} />
        </MotionGridItem>
      );
    });

    setCollection(mosaicItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onItemClick = (index: number) => {
    if (index === selected) setSelected(null);
    else setSelected(index);
  };

  return (
    <Grid
      gridTemplateColumns={[
        "repeat(auto-fit, minmax(16%, 1fr))",
        null,
        "repeat(auto-fit, minmax(18%, 1fr))",
      ]}
      gridAutoRows={["65px", "140px", null, "200px"]}
      gap={2}
      pos="relative"
      h="max-content"
      w="100vw"
      {...gridContainerStyles}
    >
      <AnimateSharedLayout type="crossfade">
        {collection}
        <AnimatePresence>
          {selected !== null && (
            <DynamicMosaicItem
              togglePresence
              layoutId={selected}
              src={images[selected]}
              onItemClick={() => onItemClick(selected)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Grid>
  );
};
