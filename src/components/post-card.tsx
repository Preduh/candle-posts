import React, { useState } from "react";

type PostCardProps = {
  title: string;
  category: string;
  emoji: string;
  content: string;
  date: string;
};

const MAX_CONTENT_CHARACTERS = 180;
const MAX_TITLE_CHARACTERS = 38;

const PostCard = ({ title, category, emoji, content, date }: PostCardProps) => {
  const [showFullTile, setShowFullTitle] = useState(false);

  return (
    <a
      href="#"
      className="bg-secondary shadow-md rounded-xl relative cursor-default flex flex-col justify-between"
    >
      <div className="h-full p-4">
        <div className="flex justify-between">
          <p className="text-3xl">{emoji}</p>
          <p className="text-sm text-light-gray">{category.toUpperCase()}</p>
        </div>
        <h2
          className="font-bold text-lg text-white my-2 h-16 flex items-center relative"
          onMouseOver={() => {
            if (title.length > MAX_TITLE_CHARACTERS) setShowFullTitle(true);
          }}
          onMouseOut={() => setShowFullTitle(false)}
        >
          {title.length > MAX_TITLE_CHARACTERS
            ? title.substring(0, MAX_TITLE_CHARACTERS) + "..."
            : title}

          {showFullTile ? (
            <div className="rounded-lg w-auto p-2 shadow-lg shadow-black absolute top-1/2 -translate-y-1/2 right-[110%] bg-dark-gray h-min flex items-center justify-center">
              <p className="text-white text-sm font-normal whitespace-nowrap">
                {title}
              </p>
              <div className="border-dark-gray absolute w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 -right-2 top-1/2 -translate-y-1/2" />
            </div>
          ) : (
            ""
          )}
        </h2>

        <p className="text-light-gray text-md">
          &ensp;
          {content.length > MAX_CONTENT_CHARACTERS
            ? content.substring(0, MAX_CONTENT_CHARACTERS) + "..."
            : content}
        </p>
      </div>
      <p className="text-light-gray mt-4 text-right h-min bg-dark-gray rounded-b-xl px-4 py-2">
        {date}
      </p>
    </a>
  );
};

export default PostCard;
