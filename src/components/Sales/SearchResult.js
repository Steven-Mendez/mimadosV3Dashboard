import React from 'react';
import './SearchResult.css';

export const SearchResult = ({ result, handleClick, setResults, setInput }) => {
  return (
    <div
      className="search-result"
      onClick={() => {
        handleClick(result);
        setInput('');
        setResults([]);
      }}
    >
      {result.name}
    </div>
  );
};
