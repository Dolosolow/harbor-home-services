import { useEffect } from "react";
import { useRouter } from "next/router";

export const useShallowQuery = (url: string) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(url, undefined, { shallow: true });
  }, []);

  return router.query;
};
