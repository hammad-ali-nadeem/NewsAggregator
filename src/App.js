import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ArticlesList from './components/ArticlesList';
import fetchArticles from './services/newsService';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedSource, setSelectedSource] = useState('bbc-news');

  useEffect(() => {
    const fetchInitialArticles = async () => {
      const fetchedArticles = await fetchArticles('', { source: selectedSource });
      setArticles(fetchedArticles);
    };
    fetchInitialArticles();
  }, [selectedSource]);

  const handleSearch = async (query) => {
    const fetchedArticles = await fetchArticles(query, filters);
    setArticles(fetchedArticles);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar
        selectedSource={selectedSource}
        onSelectSource={setSelectedSource}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
      <main className="flex-1 p-4">
        <ArticlesList articles={articles} />
      </main>
    </div>
  );
};

export default App;
