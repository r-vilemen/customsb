function customizeScrollbar(options = {}) {
  if (typeof document === "undefined") {
    return;
  }

  // Default options for the scrollbar
  const defaultOptions = {
    scrollbarWidth: "5px",
    trackBackground: "#1d1e1f",
    thumbBackground:
      "linear-gradient(178.8deg, #393939 47.41%, #7b7b7b 65.18%, #a1a1a1 90.84%)",
    thumbBorderRadius: "20px",
  };

  const settings = { ...defaultOptions, ...options };

  const styles = `
        ::-webkit-scrollbar {
            width: ${settings.scrollbarWidth};
        }
        ::-webkit-scrollbar-track {
            background: ${settings.trackBackground};
        }
        ::-webkit-scrollbar-thumb {
            background: ${settings.thumbBackground};
            border-radius: ${settings.thumbBorderRadius};
        }
    `;

  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);
}

export default customizeScrollbar;
