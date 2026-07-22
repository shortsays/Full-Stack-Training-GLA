import { useState } from "react";
import "./SearchGif.css";

const SearchGif = ({ fetchSearchGif }) => {
  const [tag, setTag] = useState("");

  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="Search GIF..."
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button
        className="btn"
        onClick={() => fetchSearchGif(tag)}
      >
        Search GIF
      </button>
    </section>
  );
};

export default SearchGif;