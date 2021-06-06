import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import closeIcon from "../images/close.png";

const Toast = forwardRef(({ text, duration = 2500 }, ref) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleOpen = () => {
    setDisplay(true);
    closeAfterTimeout();
  };

  const handleClose = () => {
    setDisplay(false);
  };

  const closeAfterTimeout = () => {
    setTimeout(() => setDisplay(false), duration);
  };

  useImperativeHandle(ref, () => {
    return {
      open: () => handleOpen(),
      close: () => handleClose(),
    };
  });

  useEffect(() => {
    closeAfterTimeout();
  }, [duration]);

  return (
    display && (
      <aside
        className="bottom-6 lg:bottom-12 fixed flex font-semibold items-start p-6 right-18 rounded lg:right-36 w-96 shadow-4xl text-left text-sm z-10"
        style={{ background: "rgb(238, 250, 245)" }}
      >
        <span className="mr-5">{text}</span>
        <button className="p-1" onClick={handleClick}>
          <img src={closeIcon} width={16} />
        </button>
      </aside>
    )
  );
});

export default Toast;
