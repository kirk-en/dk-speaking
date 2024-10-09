import "./Video.scss";

const Video = ({ url, title }) => {
  return (
    <div className="video__wrapper">
      {" "}
      <iframe
        className="video"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
