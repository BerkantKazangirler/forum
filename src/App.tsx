import { useEffect, useState } from "react";
import { CreateMenu, UserCard } from "./components";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [posts, setPosts] = useState<Posts[] | undefined>();
  const [comments, setComments] = useState<Comments[] | undefined>();
  const [users, setUsers] = useState<Users[] | undefined>();

  useEffect(() => {
    async function datas() {
      const postapi: Posts[] = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());

      const commentsapi: Comments[] = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());

      const userapi: Users[] = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      setPosts(postapi);
      setComments(commentsapi);
      setUsers(userapi);
    }

    datas();
  }, []);

  return (
    <>
      <div className="bg-main-bg w-full h-screen items-center flex justify-center">
        <div className="flex flex-col w-128 gap-6">
          <CreateMenu.CreateMenu />
          <div className="flex flex-col gap-4">
            {posts && users && comments && (
              <UserCard.UserCard
                posts={posts}
                users={users}
                comments={comments}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
