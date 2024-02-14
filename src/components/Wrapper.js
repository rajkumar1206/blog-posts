import { useParams } from 'react-router-dom';
import Post from './Post';
import Home from './Home';
import NavBar from './NavBar';

function Wrapper() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let postId = params.get('postId');


  console.log(postId);
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
