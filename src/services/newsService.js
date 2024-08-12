import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY; 

const fetchArticles = async (query, filters = {}) => {
  const { source, category, date } = filters;
  let url;
 if (category){
  url = `https://newsapi.org/v2/top-headlines?q=${query}`;
 }else{
    url = `https://newsapi.org/v2/everything?q=${query}`;
 }
  if (source) url += `&sources=${source}`;
  if (category) url += `&category=${category}`;
  if (date) url += `&from=${date}`;
  url += `&apiKey=${API_KEY}`
  const response = await axios.get(url);
  return response.data.articles;
};

export default fetchArticles;
