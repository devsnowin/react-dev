import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../lib/api';
import Pagination from '../../components/Pagination';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function PaginationPage({}) {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);

  if (!posts)
    return (
      <div className="center">
        <p className="text-lg">loading ....</p>
      </div>
    );

  // change page
  const paginate = (number: number) => setCurrentPageNumber(number);

  const postPerPage = 10;

  // Get the current posts
  const indexOfLastPost = currentPageNumber * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="center flex-col max-w-lg mx-auto">
      <h1 className="head py-6">Pagination Example</h1>
      <div className="w-[32rem] flex flex-col gap-4">
        {currentPosts?.map((post) => (
          <p key={post.id} className="">
            {post.id}. {post.title}
          </p>
        ))}
      </div>
      <p>Page: {currentPageNumber}</p>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </div>
  );
}
export default PaginationPage;
