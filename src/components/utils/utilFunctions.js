import React, { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export function Size() {
  return useWindowSize();
}

export const onScrollEffect = (event, checkpoint, toggleEffectClassName) => {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > checkpoint) {
      event.target.value.classList.add(toggleEffectClassName);
    }
    if (currentScroll < checkpoint) {
      event.target.value.classList.remove(toggleEffectClassName);
    }
  });
};

export const fadeScrollHome = () => {
  const checkpoint = 800;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const homeSection = document.getElementById("home-section");

    if (currentScroll > 350 && window.innerWidth > 1000) {
      homeSection.classList.add("blur");
    } else {
      homeSection.classList.remove("blur");
    }

    currentScroll <= checkpoint
      ? (homeSection.style.opacity = 1.5 - currentScroll / checkpoint)
      : (homeSection.style.opacity = 0);
  });
};
