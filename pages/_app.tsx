import { Layout } from "@/components/common/layout";
import { ChakraCtrlFocusProvider } from "../styles/theme";
import type { AppPropsWithLayout } from "../global";

import { content } from "@/lang/en-home";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  let page = Layout(<Component {...pageProps} />, content);

  if (Component.getLayout) {
    page = Component.getLayout(<Component {...pageProps} />, content);
  }

  return (
    <ChakraCtrlFocusProvider>
      <div style={{ backgroundColor: "#fafafa" }}>{page}</div>
    </ChakraCtrlFocusProvider>
  );
}
export default MyApp;
