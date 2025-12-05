import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
        backgroundColor: "#331811",
        color: "#e2c892",
        borderColor: "#FF7757",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "20px",
        cursor: "pointer",
        // boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2)",
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
