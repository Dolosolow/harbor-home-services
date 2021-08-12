import dynamic from "next/dynamic";

import { LayoutWithPosters } from "@/components/common/layout";
import type { HLProps } from "@/components/common/headline";
import type { TBProps } from "@/components/common/text-block";
import type { SCLProps } from "@/components/pages/services/CardList";

import { content } from "@/lang/en-services";

const DynamicHeadline = dynamic<HLProps>(() =>
  import("../../components/common/headline").then((mod) => mod.Headline)
);
const DynamicCardList = dynamic<SCLProps>(() =>
  import("../../components/pages/services/CardList").then((mod) => mod.CardList)
);
const DynamicTextBlock = dynamic<TBProps>(() =>
  import("../../components/common/text-block").then((mod) => mod.TextBlock)
);
const Services = () => {
  const { headline, description, cards, otherServices } = content;

  return (
    <div className="container container-services">
      <DynamicHeadline
        descriptor={headline.descriptor}
        title={{
          color: "pAqua",
          coloredText: headline.colorTitle,
          text: headline.title,
        }}
        caption={headline.caption}
      />
      <DynamicTextBlock text={description} styles={{ mt: [12, null, 12] }} />
      <DynamicCardList datas={cards} />
    </div>
  );
};

export default Services;

Services.getLayout = LayoutWithPosters;
