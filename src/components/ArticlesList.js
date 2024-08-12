import React from 'react';

const ArticlesList = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <h2 className="text-xl">No articles found</h2>
        <p>Try adjusting your search criteria or filters.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-200">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          </a>
          <p className="text-gray-700">{article.description}</p>
        </div>
      ))}
    </div>
    
  );
};

export default ArticlesList;
