import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentsTypeI, PostsTypeI, UsersTypeI } from "./type";
function Comments() {
  const { id } = useParams();

  const [posts, setPosts] = useState<PostsTypeI[] | undefined>();
  const [comments, setComments] = useState<CommentsTypeI[] | undefined>();
  const [users, setUsers] = useState<UsersTypeI[] | undefined>();

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

  const fetchComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => setComments(res));
  };
  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const commentsdata = comments ? comments : [];

  const testdata = posts ? posts : [];

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
                {posts ? posts[Number(id) - 1].title : "Veri Yok"}
              </span>
              <div className="flex flex-row h-12 gap-2">
                <img
                  src={"../public/user.png"}
                  alt="User avatar"
                  className="h-10 rounded-full"
                />
                <span className="text-white font-medium">
                  {users ? users[Number(id) - 1].name : "Veri Yok"}
                </span>
              </div>
            </div>
          </div>
        </div>
        {commentsdata.map((data) => {
          if (data.postId === testdata[Number(id) - 1].id) {
            return (
              <div className="bg-element-bg rounded-xl w-128 h-22 ps-3 py-3">
                <div className="flex flex-col w-full justify-between gap-2">
                  <span className="text-white font-medium text-lg w-full">
                    {data ? data.name : "Veri Yok"}
                  </span>
                  <span className="text-white font-medium/80 text-base w-full">
                    {data ? data.body : "Veri Yok"}
                  </span>
                  <span className="text-white/60 text-xs font-medium">
                    {data ? data.email : "Veri Yok"}
                  </span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default Comments;
