import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) onSearch(query);
  };

  return (
    <Search
      placeholder="Search for news articles..."
      enterButton="Search"
      size="large"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onSearch={handleSearch}
    />
  );
};

export default SearchBar;
