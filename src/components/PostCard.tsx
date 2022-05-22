import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

type PostCardProps = {
  id: number
  title: string
  category: string
  emoji: string
  content: string
  likes: number
  date: string
}

const MAX_CONTENT_CHARACTERS = 180
const MAX_TITLE_CHARACTERS = 38

const PostCard = ({
  id,
  title,
  category,
  emoji,
  content,
  likes,
  date,
}: PostCardProps) => {
  const [showFullTile, setShowFullTitle] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="bg-white dark:bg-secondary shadow-md shadow-light-gray dark:shadow-none rounded-xl relative cursor-default flex flex-col justify-between">
      <a href={`/${id}`} className="h-full p-4">
        <div className="flex justify-between">
          <p className="text-3xl">{emoji}</p>
          <p className="text-sm text-primary dark:text-light-gray">
            {category.toUpperCase()}
          </p>
        </div>
        <h2
          className="font-bold text-lg text-primary dark:text-white my-2 h-16 flex items-center relative"
          onMouseOver={() => {
            if (title.length > MAX_TITLE_CHARACTERS) setShowFullTitle(true)
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

        <p className="text-slate-700 dark:text-light-gray text-md pb-4">
          &ensp;
          {content.length > MAX_CONTENT_CHARACTERS
            ? content.substring(0, MAX_CONTENT_CHARACTERS) + "..."
            : content}
        </p>
      </a>
      <div className="h-min bg-gray-200 dark:bg-dark-gray rounded-b-xl px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          {liked ? (
            <AiFillHeart
              className="dark:text-white text-primary cursor-pointer"
              onClick={handleLike}
            />
          ) : (
            <AiOutlineHeart
              className="dark:text-white text-primary cursor-pointer"
              onClick={handleLike}
            />
          )}
          <p className="dark:text-white text-primary text-sm ml-1">{likes}</p>
        </div>
        <p className="dark:text-light-gray text-primary text-sm">{date}</p>
      </div>
    </div>
  )
}

export default PostCard
