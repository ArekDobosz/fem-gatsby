import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';

export default function Home() {
  const posts = usePosts();

  console.log(posts);
  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hello world!</p>

        <Link to="/about">&rarr; learn more...</Link>

        <h2>Read my posts</h2>
        {posts.map((post) => {
          console.log('post.title', post.title, post.slug);
          return <PostPreview key={post.slug} post={post} />;
        })}
        <Insta />
      </Layout>
    </>
  );
}
