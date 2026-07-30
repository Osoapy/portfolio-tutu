import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router";

import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

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
