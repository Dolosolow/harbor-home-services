import dynamic from "next/dynamic";

import { Article } from "@/components/common/article";
import type { CProps } from "@/components/common/card";
import type { RISProps } from "@/components/utils/responsive-img-swap";

import { useResponsiveToggle } from "@/hooks/useResponsiveToggle";

const DynamicResponsiveImgSwap = dynamic<RISProps>(() =>
  import("../../utils/responsive-img-swap").then((mod) => mod.ResponsiveImgSwap)
);
const DynamicCard = dynamic<CProps>(() => import("../../common/card").then((mod) => mod.Card));

export interface APProps {
  content: {
    first: {
      button: string;
      title: string;
      hText: string;
      sText: string;
    };
    second: {
      button: string;
      title: string;
      hText: string;
      sText: string;
    };
  };
}

export const AboutPoster = ({ content }: APProps) => {
  const { hideMobile } = useResponsiveToggle(1050);

  return (
    <Article
      renderRightSideComponent={
        <DynamicResponsiveImgSwap
          mobile={hideMobile}
          mainImgSrc="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642174377/hhs-images/Untitled_Artwork_2_wmpsjc.png"
          carouselImgs={[
            "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633503020/hhs-images/blend-bathroom_qkyyqz.webp",
            "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633503001/hhs-images/blend-livingspace_b8rutd.webp",
            "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633503011/hhs-images/blend-bedroom_rku13g.webp",
          ]}
        />
      }
      renderLeftSideComponent={
        <DynamicCard
          dark
          includeLinkButton
          title={content.first.title}
          text={content.first.hText}
          subText={content.first.sText}
          buttonText={content.first.button}
          containerStyles={{
            justifyContent: "flex-start",
            w: ["90%", null, null, "100%"],
          }}
        />
      }
      leftSideStyles={{
        justifyContent: "flex-start",
        pl: [0, null, null, 6, 24],
        pt: [0, null, null, 24],
        w: "100%",
        zIndex: 1,
      }}
      RightSideStyles={{ w: "100%", zIndex: 0 }}
      containerStyles={{
        mt: [null, null, 0],
        h: "100%",
        py: [16, null, 20, 14],
      }}
    />
  );
};
