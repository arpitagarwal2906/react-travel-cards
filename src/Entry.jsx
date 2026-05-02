export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-img-container">
        <img
          className="main-img"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
      </div>
      <div>
        <img className="marker" src="..\marker.png" alt="location marker" />
        <span>{props.entry.country}</span>
        <a href={props.entry.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>
        <h2>{props.entry.title}</h2>
        <p>{props.entry.date}</p>
        <p className="entry-description">{props.entry.text}</p>
      </div>
    </article>
  );
}
