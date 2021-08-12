import dynamic from "next/dynamic";

import { LayoutWithPosters } from "@/components/common/layout";

import type { HLProps } from "@/components/common/headline";
import type { VCProps } from "@/components/pages/about/ValueCards";
import type { VBProps } from "@/components/pages/about/VideoBanner";
import type { TBProps } from "@/components/common/text-block";

import { content } from "@/lang/en-about";

const DynamicHeadline = dynamic<HLProps>(() =>
  import("../../components/common/headline").then((mod) => mod.Headline)
);
const DynamicValueCard = dynamic<VCProps>(() =>
  import("../../components/pages/about/ValueCards").then((mod) => mod.ValueCards)
);
const DynamicVideoBanner = dynamic<VBProps>(() =>
  import("../../components/pages/about/VideoBanner").then((mod) => mod.VideoBanner)
);
const DynamicTextBlock = dynamic<TBProps>(() =>
  import("../../components/common/text-block").then((mod) => mod.TextBlock)
);

const About = () => {
  return (
    <div className="container container-about">
      <DynamicHeadline
        descriptor={content.headline.descriptor}
        title={{
          color: "pAqua",
          coloredText: content.headline.colorTitle,
          text: content.headline.title,
        }}
        caption={content.headline.caption}
      />
      <DynamicVideoBanner videosrc="https://res.cloudinary.com/dnrj5jpxf/video/upload/v1633698083/hhs-images/workflow_xpaye8.mov" />
      <DynamicTextBlock text={content.description} />
      <DynamicValueCard content={content} />
    </div>
  );
};

export default About;

About.getLayout = LayoutWithPosters;
