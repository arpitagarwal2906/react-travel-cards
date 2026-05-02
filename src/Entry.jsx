export default function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-img-container">
        <img
          className="main-img"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="mount fuji"
        />
      </div>
      <div>
        <img className="marker" src="..\marker.png" alt="location marker" />
        <span>JAPAN</span>
        <a
          href="https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f8e7e!8m2!3d35.3606255!4d138.7273634"
          target="_blank"
        >
          View on Google Maps
        </a>
        <h2>Mount Fuji</h2>
        <p>12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,389 feet). It is an active stratovolcano that last erupted in
          1707-1708. Mount Fuji is a popular destination for tourists and
          climbers, offering stunning views and a unique cultural experience.
        </p>
      </div>
    </article>
  );
}
