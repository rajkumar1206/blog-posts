import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

function BlogContext() {
  const [theme, setTheme] = useState('light');
  const [urls, setUrls] = useState({});

  const navigateToPortfolio = () => {
    window.open(urls['blog']);
  }
  
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/rajkumar1206/blog-data/main/urls.json')
      .then((resData) => {
        setUrls(resData.data);
      });
  }, []);

  useEffect(() => {
    theme === 'light' ? document.body.classList.remove('dark-mode') : document.body.classList.add('dark-mode');
  }, [theme]);

  return { theme, setTheme, urls, navigateToPortfolio };
}

export default BlogContext;
