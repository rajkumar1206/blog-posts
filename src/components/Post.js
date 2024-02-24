import {useParams} from 'react-router-dom';

function Post() {
  const {postId} = useParams();

  return (
    <div className="post">
        Coming soon...
    </div>
  );
}

export default Post;
