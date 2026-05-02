export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-img-container">
        <img className="main-img" src={props.img.src} alt={props.img.alt} />
      </div>
      <div>
        <img className="marker" src="..\marker.png" alt="location marker" />
        <span>{props.country}</span>
        <a href={props.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p className="entry-description">{props.text}</p>
      </div>
    </article>
  );
}
