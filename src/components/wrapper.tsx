import { useState } from "react";

export default function Wrapper({
  children,
  onShowVideo,
}: {
  children: React.ReactNode;
  onShowVideo: () => void;
}) {
  const [withChildren, setWithChildren] = useState(true);

  const handleWithVideoClick = () => {
    setWithChildren(true);
    onShowVideo();
  };
  return (
    <div className="wrapper">
      {withChildren && children}
      {withChildren ? (
        <button onClick={() => setWithChildren(false)}>Without Video</button>
      ) : (
        <button onClick={handleWithVideoClick}>With Video</button>
      )}
    </div>
  );
}
