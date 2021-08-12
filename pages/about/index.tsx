import dynamic from "next/dynamic";

import { LayoutWithPosters } from "@/components/common/layout";

import type { HLProps } from "@/components/common/headline";
import type { VBProps } from "@/components/pages/about/VideoBanner";

import { content } from "@/lang/en-about";

const DynamicHeadline = dynamic<HLProps>(() =>
  import("../../components/common/headline").then((mod) => mod.Headline)
);
const DynamicVideoBanner = dynamic<VBProps>(() =>
  import("../../components/pages/about/VideoBanner").then((mod) => mod.VideoBanner)
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
    </div>
  );
};

export default About;

About.getLayout = LayoutWithPosters;
