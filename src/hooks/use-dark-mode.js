import { useEffect, useState } from "react";
import { isPlatformBrowser } from "../utils/is-platform-browser";

const THEME = "dark";
const BACKGROUND = "dark:bg-primary-200";

const ROOT = isPlatformBrowser() && window.document.documentElement;
const BODY = isPlatformBrowser() && window.document.body;

function useDarkMode() {
  const darkThemeFromStorage =
    isPlatformBrowser() && JSON.parse(window?.localStorage?.darkMode || null);

  const isDarkThemeSet = darkThemeFromStorage !== null;
  const isDarkThemeActive = isDarkThemeSet && darkThemeFromStorage;

  const isDarkThemePreferred =
    isDarkThemeActive ||
    (!isDarkThemeSet &&
      window?.matchMedia("(prefers-color-scheme: dark)").matches);

  const [isDarkMode, setState] = useState(isDarkThemePreferred);

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
  }, [isDarkMode, isDarkThemePreferred]);

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;
