import { useEffect, useState } from "react";
import { PostsTypeI, UsersTypeI } from "./type";
import { CreateMenu, PostCard } from "../components";

function Main() {
  const [posts, setPosts] = useState<PostsTypeI[] | undefined>();
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
  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col w-128 gap-6">
      <CreateMenu />
      <div className="flex flex-col gap-4">
        {posts && users && <PostCard posts={posts} users={users} />}
      </div>
    </div>
  );
}

export default Main;
