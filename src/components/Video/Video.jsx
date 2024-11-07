import { useRef, useState, useEffect } from "react";
import "./Video.scss";

const Video = ({ url, title, videoThumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false); // Track if the script is loaded
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);

  // Load the YouTube IFrame API script
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // When the script loads, set scriptLoaded to true
      tag.onload = () => setScriptLoaded(true);
    } else {
      setScriptLoaded(true); // If YT is already defined, mark as loaded
    }
  }, []);

  // Initialize the player
  useEffect(() => {
    if (scriptLoaded && isPlaying && !playerInstanceRef.current) {
      playerInstanceRef.current = new window.YT.Player(playerRef.current, {
        videoId: extractVideoId(url),
        events: {
          onReady: (event) => {
            event.target.playVideo(); // Start playing when ready
          },
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }
    };
  }, [scriptLoaded, isPlaying, url]);

  // Helper function to extract the video ID from the URL
  const extractVideoId = (url) => {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <div
      className="video__wrapper"
      onClick={!isPlaying ? () => setIsPlaying(true) : null}
    >
      {videoThumbnail ? (
        isPlaying ? (
          <div ref={playerRef} className="video"></div>
        ) : (
          <img
            className="video__thumbnail"
            src={videoThumbnail}
            alt={`A thumbnail image for the video ${title}`}
          />
        )
      ) : (
        <iframe
          className="video"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
export default Video;
