import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpinnerComponent from './shared/Spinner';
import Image from 'react-bootstrap/Image';
import ErrorComponent from './shared/ErrorComponent';

function Post() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get('postId');

  const [isLoading, setIsLoading] = useState(true);
  const [iserror, seterror] = useState(false);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    console.log(searchParams);
    searchParams && axios.get('https://raw.githubusercontent.com/rajkumar1206/blog-data/main/post' + postId + '.json')
      .then((res) => {
        if (res.status === 200) {
          setBlog(res.data.content);
        } else {
          seterror(true);
        }
      })
      .catch(() => {
        seterror(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const parseContent = (data) => {
    switch (data.element) {
      case 'p':
        return (<p>{data.description}</p>);
      case 'img':
        return <Image src={'https://raw.githubusercontent.com/rajkumar1206/blog-data/main' + data.description} fluid />;
      case 'h1':
        return (<h1 className='mt-4'>{data.description}</h1>);
      case 'h2':
        return (<h2 className='mt-2'>{data.description}</h2>);
      default:
        return (<p>{data.description}</p>);
    }
  };

  if (isLoading) {
    <SpinnerComponent />
  }

  if (iserror) {
    return <ErrorComponent />
  }

  return (
    <div className="post">
        {
          blog && blog.length && blog.map((content) => {
            return parseContent(content)
          })
        }
    </div>
  );
}

export default Post;
