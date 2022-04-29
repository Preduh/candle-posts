import type { NextPage } from "next";
import Navbar from "../components/navbar";
import PostCard from "../components/post-card";
import postData from "../utils/post-data";

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-full w-full pt-16">
      <Navbar />
      <div className="grid lg:grid-row-3 gap-4 h-full p-4 md:grid-cols-4">
        <div className="bg-secondary rounded-xl lg:h-full md:h-72 h-40 lg:col-start-1 md:col-start-1 lg:col-end-3 md:col-end-3 lg:row-start-1 md:row-start-1 lg:row-end-2 md:row-end-1 flex items-center justify-center text-white">
          Usuários com mais likes
        </div>
        <div className="bg-secondary rounded-xl lg:h-full md:h-72 h-40 lg:col-start-1 md:col-start-3 lg:col-end-3 md:col-end-5 lg:row-start-2 md:row-start-1 lg:row-end-3 md:row-end-1 flex items-center justify-center text-white">
          Postagem com mais likes
        </div>
        {postData.map(({ id, title, category, emoji, content, created_at }) => (
          <PostCard
            key={id}
            title={title}
            category={category}
            emoji={emoji}
            content={content}
            date={created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
