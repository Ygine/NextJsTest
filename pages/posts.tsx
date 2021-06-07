import React from 'react';
import Layout from '../src/components/layout';
import Link from 'next/link';
import Head from 'next/head';
// import { CSSTransition } from 'react-transition-group';

// import axios from 'axios';
import { getSortedPostsData } from '../src/lib/posts'

const Posts = ({posts = [], allPostsData=[]}) => {

  // React.useEffect(() => {
  //   async function loadData(){
  //     const allPostsData = await axios.get('http://localhost:4040/posts');
  //     setPosts(allPostsData.data)
  //   }
  //   loadData();
  // }, []);

  return (
    <>
      <Head>
        <title>posts</title>
      </Head>

      <Layout home={false}>

        <section>
          <h2 >Blog</h2>
          <ul >
              {allPostsData.map(({id, content, date, title}) => (
              <li key={id}>
                <Link href={'/post/[id]'} as={`/post/${id}`}>
                  <a>
                    {title}
                    <br/>
                    {id}
                    <br/>
                    {date}
                    <br/>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </Layout>
    </>
  )
}

export default Posts;




// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await axios.get('http://localhost:4040/posts')
//   // const posts = await res.json()
//
//   // Get the paths we want to pre-render based on posts
//   // const paths = posts.map((post) => `/posts/${post.id}`)
//
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   // return { paths, fallback: false }
//  return { paths: [], fallback: bool }
// }

// getStaticProps РАБОТАЕТ НА СТОРОНЕ СЕРВЕРА

// export async function getStaticProps() {
//   const allPostsData = await axios.get('http://localhost:4040/posts');
//
//   return {
//     props: {
//       posts: allPostsData.data
//     }
//   }
// }

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}
