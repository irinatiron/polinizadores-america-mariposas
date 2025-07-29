import { useState, useRef, useEffect } from "react";

const videoUrls = [
  "https://cdn.pixabay.com/video/2022/09/16/131552-750721065_tiny.mp4",
  "https://cdn.pixabay.com/video/2017/09/18/12060-234530446_tiny.mp4",
  "https://cdn.pixabay.com/video/2023/08/11/175528-853585173_tiny.mp4",
  "https://cdn.pixabay.com/video/2024/07/26/223335_tiny.mp4"
];

function ButterflyHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Avanza al siguiente video cuando el actual termina
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  // Reinicia el video al cambiar de URL
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentIndex]);

  return (
    <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <video
        ref={videoRef}
        src={videoUrls[currentIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}

export default ButterflyHeader;
