import dynamic from "next/dynamic";

import { LayoutWithPosters } from "@/components/common/layout";

import type { APProps } from "@/components/pages/home/AboutPoster";
import type { HProps } from "@/components/pages/home/Header";
import { content } from "../lang/en-home";

const DynamicAboutPoster = dynamic<APProps>(() =>
  import("../components/pages/home/AboutPoster").then((mod) => mod.AboutPoster)
);
const DynamicHeader = dynamic<HProps>(() =>
  import("../components/pages/home/Header").then((mod) => mod.Header)
);
const DynamicImageComparison = dynamic<any>(() =>
  import("../components/pages/home/ImageComparison").then((mod) => mod.ImageComparison)
);
const DynamicServiceCards = dynamic<{ content: Array<{ title: string }> }>(() =>
  import("../components/pages/home/ServiceCards").then((mod) => mod.ServiceCards)
);

const Home = () => {
  return (
    <div className="container container-home">
      <DynamicHeader
        includeLinkButton
        buttonText={content.header.button}
        content={{
          alt: "Home landing",
          imgSrc:
            "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1641277278/hhs-images/modern_living_k5yl8r.jpg",
          text: content.header.hText,
          subText: content.header.sText,
        }}
      />
      <DynamicAboutPoster content={content.cards} />
      <DynamicServiceCards content={content.services} />
      <DynamicImageComparison />
    </div>
  );
};

export default Home;

Home.getLayout = LayoutWithPosters;
