import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    // Immediate scroll to prevent seeing mid-page content
    window.scrollTo(0, 0);
    
    // Also apply smooth scroll for visual polish
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    });
  }, [pathname, key]); // key changes on every navigation, even to same route

  return null;
};
