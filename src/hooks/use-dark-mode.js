import { useEffect, useState } from "react";
import { isPlatformBrowser } from "../utils/is-platform-browser";

const THEME = "dark";
const BACKGROUND = "dark:bg-primary-200";

const ROOT = isPlatformBrowser() && window.document.documentElement;
const BODY = isPlatformBrowser() && window.document.body;

function useDarkMode() {
  const [isDarkMode, setState] = useState(true);

  const setIsDarkMode = (value) => {
    setState(value);
    window?.localStorage?.setItem("darkMode", value);
  };

  useEffect(() => {
    if (isDarkMode) {
      ROOT.classList.add(THEME);
      BODY.classList.add(BACKGROUND);
    } else {
      ROOT.classList.remove(THEME);
      BODY.classList.remove(BACKGROUND);
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;
