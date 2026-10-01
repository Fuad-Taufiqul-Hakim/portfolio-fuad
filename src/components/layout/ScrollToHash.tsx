import { useEffect } from "react";
import { useLocation } from "react-router";

/** Scrolls to `#hash` targets after navigation (including from other pages), or to top otherwise. */
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    // Wait a frame so the target page has rendered.
    const id = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, key]);

  return null;
}
