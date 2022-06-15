import React from "react";
import "./Styles/SearchNotes.css";
const SearchNotes = ({ setSearch }) => {
  return (
    <div className="searchnotesmain">
      <input
        type="text"
        placeholder="Search your Notes"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchNotes;
