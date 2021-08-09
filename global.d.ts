import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import type { Content } from "@/lang/lang";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, content: Content) => JSX.Element;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  contact_method: "email" | "phone" | "text" | undefined;
  project_description: string;
  project_images?: Array<any>;
  selectedServices: Array<string>;
};
