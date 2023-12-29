import React from "react";

const Backtop = () => {
  const [backtotop, setdowntop] = React.useState(false);

  const runTop = () => {
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setdowntop(true);
    } else {
      setdowntop(false);
    }
  });
  return (
    <div>
      {backtotop ? (
        <button
          onClick={runTop}
          className="position-fixed border-0 backtopbtn bottom-0 me-2 mb-2  pointer"
        >
          <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
            <path
              fill="black"
              fillRule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            ></path>
            <path
              fill="black"
              fillRule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Backtop;
