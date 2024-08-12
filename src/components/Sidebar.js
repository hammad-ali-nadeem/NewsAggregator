import React, { useState } from 'react';
import { Menu } from 'antd';

const Sidebar = ({ selectedSource, onSelectSource, onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const sources = [
    { key: 'bbc-news', label: 'BBC News' },
    { key: 'the-verge', label: 'The Verge' },
    { key: 'abc-news', label: 'ABC News' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("")
  };

  return (
    <form onSubmit={handleSearch} className="w-full md:w-64 mb-4">
        <div className="w-full md:w-64 fixed h-full bg-gray-800 text-white flex flex-col p-4">
            <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
            />
            
        <Menu
            mode="inline"
            selectedKeys={[selectedSource]}
            onClick={(e) => onSelectSource(e.key)}
            className="bg-transparent"
        >
            {sources.map((source) => (
            <Menu.Item key={source.key} className="hover:bg-gray-700" style={{color:"#fff"}}>
                {source.label}
            </Menu.Item>
            ))}
        </Menu>
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Filters</h3>
            {/* Add your filter controls here */}
            <select
                placeholder="Select Source"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                onChange={(e) => onFilterChange('source', e.target.value)}
            >
                <option value="">Select Source</option>
                <option value="bbc-news">BBC News</option>
                <option value="the-verge">The Verge</option>
                <option value="abc-news">ABC NEWS</option>
            </select>
            
            <select
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
            >
            <option value="">All Categories</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            </select>
        </div>
        
            <button type="submit" className="w-full bg-blue-500 p-2 mt-2 rounded">
            Search
            </button>
        </div>
    </form>
  );
};

export default Sidebar;
