import React, { useState, useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
      console.log("Clean up...");
      // RemoveEventListener stop to memory leak
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <>
      <h2>Window width: {windowWidth}</h2>
    </>
  );
};

export default WindowTracker;
