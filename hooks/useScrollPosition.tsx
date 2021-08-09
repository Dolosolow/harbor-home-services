import { useEffect, useState } from "react";

export const useScrollPosition = (checkpointValue?: number) => {
  const [scrollYPosition, setScrollYPosition] = useState<number | undefined>(undefined);
  const [checkpoint, setCheckpoint] = useState(false);

  useEffect(() => {
    const getScrollPosition = () => {
      setScrollYPosition(window.scrollY);

      if (checkpointValue && window.scrollY >= checkpointValue) {
        if (!checkpoint) setCheckpoint(true);
      } else {
        if (checkpoint) setCheckpoint(false);
      }
    };

    window.addEventListener("scroll", getScrollPosition);

    return () => {
      window.removeEventListener("scroll", getScrollPosition);
    };
  });

  return { yPagePosition: scrollYPosition, checkpointReached: checkpoint };
};
