import { useEffect, useState } from "react";

let ticking = false;
let lastScrollY = 0;

function useScrollPosition() {
  const [scroll, setScroll] = useState({
    isScrollTop: false,
    lastScrollY: 0,
  });

  const handleScroll = () => {
    const { scrollY } = window;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const isScrollTop = scrollY > lastScrollY;

        lastScrollY = scrollY;
        ticking = false;

        setScroll({ isScrollTop, lastScrollY: scrollY });
      });

      ticking = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
}

export default useScrollPosition;
