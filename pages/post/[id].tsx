import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Date  from '../../src/components/date'
// import axios from "axios";
import { getAllPostIds, getPostData } from '../../src/lib/posts'

type post = {
  text: string,
  id: string,
  tag: string
}

export default function Id({postData}) {
  const router = useRouter();

  // if(!post) {
  //   return(
  //   <h1 className='text-pink-600 m-5 font-medium'>Loading ...</h1>
  // )};

  return (
    <>
    <Head>
      <title>{postData.title}</title>
    </Head>


    <div className={'p-5 text-center'}>
      <div className="rounded text-left overflow-hidden shadow-lg my-2">
        <Image
          width={200}
          height={300}
          className="w-full"
          src="/images/temp71153-thumb.jpg"
          alt="Sunset in the mountains"
        />
        <Date dateString={postData.date} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{postData.tag}</div>
          <p className="text-grey-darker text-base">
            {postData.text}
          </p>
        </div>
        <div className="px-6 py-4">
          <span
            className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {postData.id}
          </span>

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        </div>
      </div>

      <h2>
        <Link href="/">
          <a className="text-blue-600">Back to home</a>
        </Link>
      </h2>
    </div>
      </>

  )
}


export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

// export async function getServerSideProps({params}) {
//   const post = await axios.get(`http://localhost:4040/posts/${params.id}`);
//
//   return {
//     props: {
//       post: post.data,
//     }
//   }
// }

