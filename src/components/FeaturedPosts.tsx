import { getAllPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
