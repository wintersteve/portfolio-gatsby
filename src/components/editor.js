import React from "react";

function Editor() {
  return (
    <>
      <div
        style={{
          maxWidth: "50%",
          position: "relative",
          bottom: "3rem",
          right: "8rem",
        }}
        className="hidden lg:block bg-primary relative md:px-8 lg:px-0 col-start-1 col-span-full lg:col-start-1 xl:col-start-3 xl:col-end-4 row-start-1 row-end-2 xl:row-start-2 xl:row-end-5 self-center pt-8 lg:pt-0 rounded-md"
      >
        <div className="mx-auto lg:max-w-2xl xl:max-w-none">
          <div className="relative overflow-hidden md:rounded-xl shadow-2xl flex CodeWindow_root__1fMBP Hero_codeWindow__1W0zH bg-light-blue-500 pb-6 md:pb-0">
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
            <div className="relative w-full flex flex-col">
              <div className="flex-none h-11 flex items-center px-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                  <div className="w-3 h-3 border-2 rounded-full border-amber-400"></div>
                  <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                </div>
              </div>
              <div className="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col">
                <div
                  className="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"
                  style={{ width: "50px" }}
                ></div>
                <div className="w-full flex-auto flex min-h-0 overflow-auto">
                  <div className="w-full relative flex-auto">
                    <pre className="flex min-h-full text-xs md:text-sm">
                      <div
                        aria-hidden="true"
                        className="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none"
                        style={{
                          width: "50px",
                          display: "flex",
                          flexDirection: "column",
                          whiteSpace: "pre-wrap",
                          padding: "1rem",
                        }}
                      >
                        1 2 3 4 5 6 7 8 9 10 11 12
                      </div>
                      <code className="flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto opacity-60">
                        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Steve Winter | Full-Stack Developer</title>
</head>
<body>
  I program awesome applications
</body>
</html>`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
