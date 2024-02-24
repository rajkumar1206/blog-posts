import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Post from './Post';
import Home from './Home';
import NavBar from './NavBar';
import BlogContext from '../context/BlogContext';
import Contact from './Contact';
import Footer from './Footer';

export const AppContext = createContext({ theme: 'light' });

function Wrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get('postId');

  const context = BlogContext();

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <div className='text-start'>
          <NavBar />
          <div className='container'>
            { postId ? <Post /> : <Home /> }
            { !postId && <Contact />}
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default Wrapper;
