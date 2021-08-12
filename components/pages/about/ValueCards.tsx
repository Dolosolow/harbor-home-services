import type { IconProps as IP } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import type { ICProps, ICCProps } from "@/components/common/iconed-card";
import type { AboutContent } from "@/lang/lang";

export interface VCProps {
  content: AboutContent;
}

const icons = [
  dynamic<IP>(() => import("../../common/icons/HandShakeIcon").then((mod) => mod.HandShakeIcon)),
  dynamic<IP>(() => import("../../common/icons/UserTieIcon").then((mod) => mod.UserTieIcon)),
  dynamic<IP>(() => import("../../common/icons/ShieldIcon").then((mod) => mod.ShieldIcon)),
];

const DynamicIconedCard = dynamic<ICProps>(() =>
  import("../../common/iconed-card").then((mod) => mod.IconedCard)
);
const DynamicIconedCardContainer = dynamic<ICCProps>(() =>
  import("../../common/iconed-card").then((mod) => mod.IconedCardContainer)
);

export const ValueCards = ({ content }: VCProps) => (
  <DynamicIconedCardContainer>
    {content.cards.map((card, idx) => {
      const Comp = icons[idx];
      return (
        <DynamicIconedCard
          key={idx}
          title={card.title}
          content={card.content}
          height={["250px", null, null, "270px"]}
          IconComponent={<Comp boxSize={16} color="pAqua" />}
        />
      );
    })}
  </DynamicIconedCardContainer>
);
