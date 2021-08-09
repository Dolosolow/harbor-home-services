export type HomeContent = {
  html: {
    meta: {
      phone: string;
      email: string;
      address: string;
      city: string;
      sitname: string;
      title: string;
      description: string;
      keywords: string[];
    };
  };
  directories: string[];
  header: {
    button: string;
    hText: string;
    sText: string;
  };
  cards: {
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
  services: Array<{
    title: string;
  }>;
  footer: {
    watermark: string;
  };
  poster: {
    hText: string;
    sText: string;
  };
  alerts: {
    bold: string | null;
    message: string | null;
    backgroundColor: string | null;
    color: string | null;
  };
};

export type AboutContent = {
  headline: {
    descriptor: string;
    colorTitle: string;
    caption: string;
    title: string;
  };
  description: string;
  cards: Array<{
    title: string;
    content: string;
  }>;
};

export type ServicesContent = {
  headline: {
    descriptor: string;
    colorTitle: string;
    caption: string;
    title: string;
  };
  description: string;
  cards: Array<{
    title: string;
    content: string;
  }>;
  otherServices: string[];
};
