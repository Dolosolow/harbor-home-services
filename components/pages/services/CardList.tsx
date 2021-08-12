import type { IconProps as IP } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import type { ICProps, ICCProps } from "@/components/common/iconed-card";

export type Service = { title: string; content: string };

export interface SCLProps {
  datas: Service[];
}

const icons = [
  dynamic<IP>(() => import("../../common/icons/PuzzleIcon").then((mod) => mod.PuzzleIcon)),
  dynamic<IP>(() => import("../../common/icons/ElectricIcon").then((mod) => mod.ElectricIcon)),
  dynamic<IP>(() => import("../../common/icons/CeilFanIcon").then((mod) => mod.CeilFanIcon)),
  dynamic<IP>(() => import("../../common/icons/FloorTileIcon").then((mod) => mod.FloorTileIcon)),
  dynamic<IP>(() => import("../../common/icons/GarageIcon").then((mod) => mod.GarageIcon)),
  dynamic<IP>(() => import("../../common/icons/ToolboxIcon").then((mod) => mod.ToolboxIcon)),
  dynamic<IP>(() => import("../../common/icons/DigIcon").then((mod) => mod.DigIcon)),
  dynamic<IP>(() => import("../../common/icons/RollerbrushIcon").then((mod) => mod.Rollerbrush)),
  dynamic<IP>(() => import("../../common/icons/HomeRepairIcon").then((mod) => mod.HomeRepairIcon)),
];

const DynamicIconedCard = dynamic<ICProps>(() =>
  import("../../common/iconed-card/IconedCard").then((mod) => mod.IconedCard)
);
const DynamicIconedCardContainer = dynamic<ICCProps>(() =>
  import("../../common/iconed-card").then((mod) => mod.IconedCardContainer)
);

export const CardList = ({ datas }: SCLProps) => {
  return (
    <DynamicIconedCardContainer>
      {datas.map((data, idx) => {
        const Comp = icons[idx];
        return (
          <DynamicIconedCard
            key={idx}
            title={data.title}
            content={data.content}
            navLink={{ href: "#", placeholder: "Learn more" }}
            IconComponent={<Comp boxSize={20} color="pAqua" />}
          />
        );
      })}
    </DynamicIconedCardContainer>
  );
};
