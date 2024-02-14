import {useParams} from 'react-router-dom';

function Post() {
  const {postId} = useParams();

  return (
    <div className="App">
        Post page
    </div>
  );
}

export default Post;
