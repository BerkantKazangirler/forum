import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentsTypeI, PostsTypeI, UsersTypeI } from "./type";

function Comments() {
  const [posts, setPosts] = useState<PostsTypeI[]>([]);
  const [comments, setComments] = useState<CommentsTypeI[]>([]);
  const [users, setUsers] = useState<UsersTypeI[]>([]);
  const { id } = useParams();

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?id=" + id)
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users?id=" + id)
      .then((res) => res.json())
      .then((res) => setUsers(res));
  };

  const fetchComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id)
      .then((res) => res.json())
      .then((res) => setComments(res));
  };
  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  //             if (data.postId === testdata[Number(id) - 1].id) {

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-element-bg rounded-xl w-128">
          <div className="flex flex-row justify-between gap-6 p-4">
            <img
              src={"../public/user.png"}
              className="rounded-xl h-40"
              alt=""
            />
            <div className="flex flex-col w-full justify-between">
              <span className="text-white font-medium text-lg w-full">
                {posts[0] ? posts[0].title : "Veri Yok"}
              </span>
              <div className="flex flex-row h-12 gap-2">
                <img
                  src={"../public/user.png"}
                  alt="User avatar"
                  className="h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-white font-medium">
                    {users[0] ? users[0].name : "Veri Yok"}
                  </span>
                  <span className="text-white/50 text-[12px] font-medium">
                    {users[0] ? users[0].email : "Veri Yok"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          {comments.map((data, index) => {
            return (
              <div
                className="bg-element-bg rounded-xl w-128 h-22 ps-3 py-3"
                key={index}
              >
                <div className="flex flex-col w-full justify-between gap-2">
                  <span className="text-white font-medium text-lg w-full">
                    {data ? data.name : "Veri Yok"}
                  </span>
                  <span className="text-white font-medium/80 text-[14px] w-full">
                    {data ? data.body : "Veri Yok"}
                  </span>
                  <span className="text-white/60 text-[12px] font-medium">
                    {data ? data.email : "Veri Yok"}
                  </span>
                </div>
              </div>
            );
          })}
        </Suspense>
      </div>
    </>
  );
  function Loading() {
    return <h2>Yükleniyor...</h2>;
  }
}

export default Comments;
