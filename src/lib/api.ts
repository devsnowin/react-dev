import { fetcher } from './fetcher';

export const getPosts = async () => {
  const posts = await fetcher({ params: '/posts' });
  return posts;
};
