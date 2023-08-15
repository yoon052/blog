import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
