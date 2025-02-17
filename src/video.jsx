

const Video = ({handleShow}) => {
  return (
    <div className="video-container" onClick={handleShow}>
      <iframe 
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
