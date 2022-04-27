import type { NextPage } from "next";
import Navbar from "../components/navbar";
import PostCard from "../components/post-card";
import postData from "../utils/post-data";

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-full w-full pt-16">
      <Navbar />
      <div className="grid grid-cols-4 grid-row-3 gap-4 h-full p-4">
        <div className="bg-secondary rounded-xl col-start-1 col-end-3 row-start-1 row-end-2 flex items-center justify-center text-white">
          Usuários com mais likes
        </div>
        <div className="bg-secondary rounded-xl col-start-1 col-end-3 row-start-2 row-end-3 flex items-center justify-center text-white">
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
