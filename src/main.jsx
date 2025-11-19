import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router";
import "./index.css";
import App from "./App.jsx";
const basename =
  import.meta.env.MODE === "production" ? "/college-directory" : "/";

function RedirectHandler({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirectPath");
    if (redirectPath) {
      sessionStorage.removeItem("redirectPath");
      // Remove the basename from the stored path before navigating
      navigate(redirectPath.replace(basename, ""));
    }
  }, [navigate]);

  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <RedirectHandler>
        <App />
      </RedirectHandler>
    </BrowserRouter>
  </StrictMode>
);
