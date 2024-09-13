import "./Video.scss";

const Video = () => {
  return (
    <div className="video__wrapper">
      {" "}
      <iframe
        className="video"
        src="https://www.youtube.com/embed/zuG3YXpt4PI?si=FnvClo3mE02dmIIg"
        title="Dennis Kenney Ted Talk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
