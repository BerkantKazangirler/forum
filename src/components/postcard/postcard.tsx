import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import classNames from "classnames";
import { Suspense, useEffect, useState } from "react";
import { PostsTypeI, UsersTypeI } from "../../pages/type";
import { Link } from "react-router-dom";

function PostCard({}) {
  const [posts, setPosts] = useState<PostsTypeI[]>([]);
  const [users, setUsers] = useState<UsersTypeI[]>([]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  };

  const postdatas = posts.slice(0, 4);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
    localStorage.setItem("likedposts", likedPosts.toString());
  };

  useEffect(() => {
    fetchPosts();
    fetchUsers();

    const local = localStorage.getItem("likedposts");
    if (local == null || local == "") {
      localStorage.setItem("likedposts", "false");
    }
  }, []);

  return (
    <Suspense fallback={<Loading />}>
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
                    to={`/posts/${post.id}`}
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
                  <div className="flex flex-col">
                    <span className="text-white font-medium">
                      {user ? user.name : "Veri Yok"}
                    </span>
                    <span className="text-white/50 text-[12px] font-medium">
                      {user ? user.email : "Veri Yok"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Suspense>
  );
  function Loading() {
    return <h2>Yükleniyor...</h2>;
  }
}

export default PostCard;
