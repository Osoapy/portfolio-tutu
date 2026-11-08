import ReactDOM from "react-dom/client";
import { useLayoutEffect } from "react";
import { BrowserRouter, useLocation } from "react-router";

import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
          behavior: "smooth",
        });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <LanguageProvider>
      <ScrollToTop />
      <App />
    </LanguageProvider>
  </BrowserRouter>
);
