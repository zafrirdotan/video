import { useState } from "react";

import "./App.css";
import Video from "./components/video";
import { getVideo } from "./services/video-service";
import Wrapper from "./components/wrapper";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetVideo = async () => {
    console.log("handleGetVideo");

    setLoading(true);
    getVideo()
      .then((url) => {
        setVideoUrl(url);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <>
      <Wrapper onShowVideo={handleGetVideo}>
        {error && (
          <div className="error">
            <p>Failed to load video</p>
          </div>
        )}
        <Video url={videoUrl} />

        <button onClick={handleGetVideo} disabled={loading}>
          {loading ? " loading..." : "Load Video"}
        </button>
      </Wrapper>
    </>
  );
}

export default App;
