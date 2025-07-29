import { useState, useRef, useEffect } from "react";
import "./ButterflyVideoLoop.css"; 

const videoUrls = [
  "https://cdn.pixabay.com/video/2022/09/16/131552-750721065_tiny.mp4",
  "https://cdn.pixabay.com/video/2017/09/18/12060-234530446_tiny.mp4",
  "https://cdn.pixabay.com/video/2023/08/11/175528-853585173_tiny.mp4",
  "https://cdn.pixabay.com/video/2024/07/26/223335_tiny.mp4"
];

function ButterflyHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  // Avanza al siguiente video
  const goToNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play();

      // Limita duración a 3 segundos
      timeoutRef.current = setTimeout(() => {
        goToNextVideo();
      }, 4000);
    }

    // Limpieza del timeout al cambiar de vídeo
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="butterfly-header-container">
      <video
        ref={videoRef}
        src={videoUrls[currentIndex]}
        autoPlay
        muted
        playsInline
        className="butterfly-video"
      />
    </div>
  );
}

export default ButterflyHeader;