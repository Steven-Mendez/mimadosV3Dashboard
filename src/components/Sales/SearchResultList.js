import React from 'react';
import './SearchResultsList.css';
import { SearchResult } from './SearchResult';

export const SearchResultList = ({
  results,
  handleClick,
  setResults,
  setInput,
}) => {
  return (
    <div
      className={`results-container ${results.length > 0 ? 'expanded' : ''}`}
    >
      {results.length > 0 && (
        <div className="results-list">
          {results.map((result, id) => {
            return (
              <SearchResult
                result={result}
                key={id}
                handleClick={handleClick}
                setResults={setResults}
                setInput={setInput}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
