import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ArrowRight } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from "./Wrapper";
import SpinnerComponent from "./shared/Spinner";
import ErrorComponent from "./shared/ErrorComponent";

function Posts() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, seterror] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const {theme, urls} = useContext(AppContext);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/rajkumar1206/blog-data/main/blog-data.json')
      .then(res => {
        const data = res.data;
        setBlogs(data.data);
      })
      .catch((err) => {
        seterror(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  const handlePostnavigation = (postId) => {
    navigate({
      search: createSearchParams({
          postId
      }).toString()
    });
  }

  if (isLoading) {
    return <SpinnerComponent />
  }

  if (iserror) {
    return <ErrorComponent />
  }

  return (
    <div className="mt-4">
      {/* <h1 className="heading text-start">Blogs</h1> */}
      <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap mt-2">
        {
          !iserror && blogs.map((blog) => (
            <div>
               <Card
                style={{ minWidth: '18rem' }}
                bg={theme === 'light' ? "light" : "dark"}
                text={theme === 'light' ? 'dark' : 'white'}
                >
                <Card.Img variant="top" width={400} src={'https://raw.githubusercontent.com/rajkumar1206/blog-data/main/' + blog.image} />
                <Card.Body>
                  <Card.Title>{blog.topic}</Card.Title>
                  <Card.Text>
                    {blog.description}
                  </Card.Text>
                  <Button variant={theme === 'light' ? "outline-dark" : "outline-light"} onClick={() => handlePostnavigation(blog.postId)}>Read <ArrowRight /></Button>
                </Card.Body>
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Posts;
