import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PreLoad = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000,
    });
  }, []);
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoad(true); // Simulated content loaded after delay
      document.body.style.overflow = "auto"; // Display scrollbar when loaded
    }, 2500); // Simulated delay of 2 seconds

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      <div
        className="preloader min-vh-100 min-vw-100 bg-black position-fixed top-0 start-0"
        style={{ display: Load ? "none" : "block", zIndex: 10 }}
      >
        <div className="d-flex align-items-center justify-content-center min-vh-100">
          <div data-aos="zoom-in">
            <div class="fs-xxl light-yellow-2 ff-azo fw-normal fw-900">
              DOMPKONG....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoad;
