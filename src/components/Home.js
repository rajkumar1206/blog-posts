import '../App.css';
import { createSearchParams, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handlePostnavigation = () => {
    navigate({
      search: createSearchParams({
          postId: 123
      }).toString()
    });
  }


  return (
    <div className="App">
        home Page
        <div onClick={handlePostnavigation}>Post 1</div>
    </div>
  );
}

export default Home;
