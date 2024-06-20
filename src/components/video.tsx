import { memo, useEffect, useRef, useState } from "react";
import ProgressBar from "./progress-bar";

export default memo(function Video({ url }: { url: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [buffered, setBuffered] = useState(0);

  useEffect(() => {
    if (url) {
      const { current } = videoRef;
      current?.play();
      current?.addEventListener("loadedmetadata", () => {
        setDuration(current?.duration || 0);
      });

      current?.addEventListener("timeupdate", () => {
        setCurrentTime(current?.currentTime || 0);
      });

      current?.addEventListener("progress", () => {
        if (current?.buffered?.length) {
          const { buffered } = current;

          const bufferedEnd = current.buffered.end(buffered.length - 1);
          setBuffered(bufferedEnd);
        }
      });
    }
    return () => {
      const { current } = videoRef;
      current?.removeEventListener("loadedmetadata", () => {});
      current?.removeEventListener("timeupdate", () => {});
      current?.removeEventListener("progress", () => {});
      current?.pause();
    };
  }, [url]);

  return (
    <>
      <video
        width="320"
        height="240"
        controls
        src={url}
        poster="image.png"
        ref={videoRef}
      />
      <ProgressBar
        duration={duration}
        currentTime={currentTime}
        buffered={buffered}
      />
    </>
  );
});
