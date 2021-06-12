import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import closeIcon from "../images/close.png";
import { NOTIFICATION } from "../models/notification";

const Toast = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState(NOTIFICATION.SUCCESS);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleOpen = ({ duration, text, type }) => {
    setDisplay(true);
    setText(text);
    setType(type);

    closeAfterTimeout(duration);
  };

  const handleClose = () => {
    setDisplay(false);
    setText(null);
    setType(null);
  };

  const closeAfterTimeout = useCallback((duration) => {
    setTimeout(() => handleClose(), duration);
  }, []);

  useImperativeHandle(ref, () => ({
    open: ({ duration = 5000, text, type = NOTIFICATION.SUCCESS }) =>
      handleOpen({ duration, text, type }),
    close: () => handleClose(),
  }));

  useEffect(() => {
    closeAfterTimeout();
  }, [closeAfterTimeout]);

  return (
    display && (
      <aside
        className={`bottom-6 lg:bottom-12 fade fixed flex font-semibold items-start
          justify-between left-2/4 md:left-unset p-6 right-18 rounded lg:right-36
          w-11/12 md:w-96 shadow-4xl text-left text-sm transform -translate-x-2/4 md:-translate-x-0 z-60
        `}
        style={{
          background:
            type === NOTIFICATION.SUCCESS ? "rgb(238, 250, 245)" : "#D62828",
        }}
      >
        <span className="mr-5">{text}</span>
        <button className="p-1" onClick={handleClick}>
          <img alt="close" src={closeIcon} width={16} />
        </button>
      </aside>
    )
  );
});

export default Toast;
