import { useEffect, useState } from "react";
import Head from "next/head";

import { content } from "@/lang/en-home";
interface MHProps {
  sitname?: string;
  title?: string;
  description?: string;
  keywords?: string[];
}

export const MetaHead = ({ sitname, title, description, keywords }: MHProps) => {
  const {
    html: { meta },
  } = content;

  const [hostname, setHostname] = useState<string | null>(null);

  useEffect(() => {
    setHostname(window.location.origin);
  }, []);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description ?? meta.description} />
      <meta name="keywords" content={keywords ? keywords.join(", ") : meta.keywords.join(", ")} />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title ?? meta.title} key="ogtitle" />
      <meta property="og:description" content={description ?? meta.description} key="ogdesc" />
      <meta property="og:site_name" content={sitname ?? meta.sitname} key="ogsitename" />
      <meta property="og:url" content={hostname ? hostname : undefined} key="ogurl" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <title>{meta.title ?? title}</title>
    </Head>
  );
};
