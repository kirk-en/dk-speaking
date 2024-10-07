import "./Video.scss";

const Video = () => {
  return (
    <div className="video__wrapper">
      {" "}
      <iframe
        className="video"
        src="https://www.youtube.com/embed/hDnxVHoX86s?si=FnvClo3mE02dmIIg"
        title="Dennis Kenney Ted Talk"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
