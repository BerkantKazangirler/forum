import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import classNames from "classnames";
import { useState } from "react";
import { PostsTypeI, UsersTypeI } from "../../pages/type";
import { Link } from "react-router-dom";

interface props {
  posts: PostsTypeI[];
  users: UsersTypeI[];
}

function PostCard({ posts, users }: props) {
  const postdatas = posts.slice(0, 4);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <>
      {postdatas.map((post, index) => {
        const user = users.find((user) => user.id === post.id);

        return (
          <div
            key={index}
            className="bg-element-bg rounded-xl"
            id={post.id.toString()}
          >
            <div className="flex flex-row justify-between gap-6 p-4">
              <img
                src={"./public/user.png"}
                className="rounded-xl h-40"
                alt=""
              />
              <div className="flex flex-col w-full justify-between">
                <div className="flex flex-row justify-between">
                  <Link
                    to={`/posts/${post?.id}`}
                    className="text-white font-medium text-lg w-full"
                  >
                    {post ? post.title : "Veri Yok"}
                  </Link>
                  <button
                    className={classNames("p-1 rounded-full text-xl h-fit", {
                      "bg-orange-400": likedPosts.includes(post.id),
                      "bg-like-bg": !likedPosts.includes(post.id),
                    })}
                    onClick={() => toggleLike(post.id)}
                  >
                    {(likedPosts.includes(post.id) && (
                      <FaHeart className="text-white" />
                    )) || <IoMdHeartEmpty className="text-white" />}
                  </button>
                </div>
                <div className="flex flex-row h-12 gap-2">
                  <img
                    src={"./public/user.png"}
                    alt="User avatar"
                    className="h-10 rounded-full"
                  />
                  <span className="text-white font-medium">
                    {user ? user.name : "Veri Yok"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PostCard;