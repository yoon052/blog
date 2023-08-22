import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section>
      <h2>You May Like</h2>
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </section>
  );
}
