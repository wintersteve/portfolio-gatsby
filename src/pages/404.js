import * as React from "react";
import { Link } from "gatsby";
import useDarkMode from "../hooks/use-dark-mode";

// markup
const NotFoundPage = () => {
  useDarkMode();

  return (
    <main className="dark:bg-primary-300 dark:text-white flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 font-semibold text-7xl">404</h1>
      <h2 className="dark:bg-primary-100 mb-10 p-3 rounded-lg text-lg">
        PAGE NOT FOUND
      </h2>
      <Link className="" to="/">
        Go Back
      </Link>
    </main>
  );
};

export default NotFoundPage;
