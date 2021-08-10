import dynamic from "next/dynamic";

import { MetaHead } from "@/components/utils/meta-head";
import type { FProps } from "@/components/common/footer";
import type { PProps } from "@/components/common/poster";

import type { HomeContent } from "@/lang/lang";

const DynamicFooter = dynamic<FProps>(() => import("../footer").then((mod) => mod.Footer));
const DynamicPoster = dynamic<PProps>(() => import("../poster").then((mod) => mod.Poster));
const DynamicNavbar = dynamic<any>(() => import("../navbar").then((mod) => mod.Navbar));

export const Layout = (page: React.ReactElement, content: HomeContent) => {
  return (
    <>
      <MetaHead />
      <DynamicNavbar />
      {page}
      <DynamicFooter
        directories={["Home", "About Us", "Services", "Contact Us"]}
        watermark={content.footer.watermark}
        contactInfo={{ ...content.html.meta }}
      />
    </>
  );
};

export const LayoutWithPosters = (page: React.ReactElement, content: HomeContent) => {
  return (
    <>
      <MetaHead />
      <DynamicNavbar />
      {page}
      <DynamicPoster
        pt={10}
        pb={20}
        imgsrc="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1633499445/hhs-images/ceil-paint_kzgkv8.png"
        headText={content.poster.hText}
        subText={content.poster.sText}
      />
      <DynamicFooter
        directories={content.directories}
        watermark={content.footer.watermark}
        contactInfo={{ ...content.html.meta }}
      />
    </>
  );
};
