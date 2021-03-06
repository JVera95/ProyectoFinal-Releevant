export default function VideoBackground({ video }) {
  return (
    <video
      className="videoInicio"
      id="video-inicio"
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        right: 0,
        bottom: 0,
        minWidth: "100%",
        minHeight: "100%",
        zIndex: -1,
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
