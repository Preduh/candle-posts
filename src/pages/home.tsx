import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { parseCookies } from "nookies"
import Navbar from "../components/Navbar"
import PostCard from "../components/PostCard"
import postData from "../utils/post-data"

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-primary h-full min-h-screen w-full pt-16">
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className="grid lg:grid-row-2 gap-4 h-full p-4 md:grid-cols-4">
        <div className="bg-white dark:shadow-none shadow-md shadow-light-gray dark:bg-secondary rounded-xl lg:h-full md:h-72 h-40 lg:col-start-1 md:col-start-1 lg:col-end-3 md:col-end-3 lg:row-start-1 md:row-start-1 lg:row-end-2 md:row-end-1 flex items-center justify-center text-primary dark:text-white">
          Usuários com mais likes
        </div>
        <div className="bg-white dark:shadow-none shadow-md shadow-light-gray dark:bg-secondary rounded-xl lg:h-full md:h-72 h-40 lg:col-start-1 md:col-start-3 lg:col-end-3 md:col-end-5 lg:row-start-2 md:row-start-1 lg:row-end-3 md:row-end-1 flex items-center justify-center text-primary dark:text-white">
          Postagem com mais likes
        </div>
        {postData.map(
          ({ id, title, category, emoji, content, likes, created_at }) => (
            <PostCard
              key={id}
              id={id}
              title={title}
              category={category}
              emoji={emoji}
              content={content}
              likes={likes}
              date={created_at}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async context => {
  const { "candle.token": token } = parseCookies(context)

  if (!token)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }

  return {
    props: {},
  }
}
