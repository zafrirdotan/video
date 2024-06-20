import { useEffect, useState } from "react";

export default function ProgressBar({
  buffered,
  currentTime,
  duration,
}: {
  buffered: number;
  currentTime: number;
  duration: number;
}) {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(0);

  useEffect(() => {
    setProgress(duration ? (currentTime / duration) * 100 : 0);
    setBuffer(duration ? (buffered / duration) * 100 : 0);
  }, [buffered, currentTime, duration]);

  return (
    <div className="bar">
      <div className="buffer" style={{ width: buffer + "%" }} />
      <div className="progress" style={{ width: progress + "%" }} />
    </div>
  );
}
