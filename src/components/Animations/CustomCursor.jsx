import { useEffect, useRef } from "react";
import { emojiCursor } from "./EmojiCursor";

const CustomCursor = ({ emoji = ["🦋", "✨", "🌸"], zIndex = 9999, fullScreen = true }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const instance = emojiCursor({
      emoji,
      zIndex,
      element: fullScreen ? undefined : wrapperRef.current, 
    });

    return () => {
      instance.destroy();
    };
  }, [emoji, zIndex, fullScreen]);

  if (!fullScreen) {
    return (
      <div
        ref={wrapperRef}
        id="emoji"
        style={{ position: "relative", width: "100%", height: "100%" }}
      />
    );
  }

  return null;
};

export default CustomCursor;
