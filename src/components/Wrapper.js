import { useSearchParams } from 'react-router-dom';
import Post from './Post';
import Home from './Home';
import NavBar from './NavBar';

function Wrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get('postId');

  return (
    <div className="App">
      <NavBar />
      {
        postId ? <Post /> : <Home />
      }
    </div>
  );
}

export default Wrapper;
