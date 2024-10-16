import React from "react";

const Modal = ({ children, show, close }) => {
  if (!show) return null;

  return (
    <div className="
        fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center
    " onClick={close}>
      <div className="
            bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto
      " onClick={(e) => e.stopPropagation()}>
        <span className="
            absolute top-0 right-0 cursor-pointer flex flex-col items-center m-3
        " onClick={close}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
