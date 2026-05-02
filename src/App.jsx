import Entry from "./Entry.jsx";
import Header from "./Header.jsx";
import data from "./data.js";

function App() {
  return (
    <>
      <Header />
      {data.map((entry) => (
        <Entry
          key={entry.id}
          // 1st approach: passing individual props to Entry component
          // img={entry.img}
          // title={entry.title}
          // country={entry.country}
          // googleMapsUrl={entry.googleMapsUrl}
          // date={entry.date}
          // text={entry.text}
          // how to reference these props in Entry component? props.img, props.title, props.country, props.googleMapsUrl, props.date, props.text

          // 2nd approach: passing entire object as a prop to Entry component
          entry={entry}
          // how to reference these props in Entry component? props.entry.img, props.entry.title, props.entry.country, props.entry.googleMapsUrl, props.entry.date, props.entry.text

          // 3rd approach: using spread operator to pass all properties of the entry object as props to Entry component
          // {...entry}
          // how to reference these props in Entry component? props.img, props.title, props.country, props.googleMapsUrl, props.date, props.text
        />
      ))}
    </>
  );
}

export default App;
