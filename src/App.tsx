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
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [comments, setComments] = useState<Comments[]>([]);
  const [users, setUsers] = useState<Users[]>([]);

  async function fetchPosts(): Promise<Posts[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsdata = await response.json();
    return postsdata;
  }

  async function fetchUsers(): Promise<Users[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersdata = await response.json();
    return usersdata;
  }

  async function fetchComments(): Promise<Comments[]> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const commentsdata = await response.json();
    return commentsdata;
  }

  useEffect(() => {
    fetchPosts().then((postsdata) => setPosts(postsdata));
    fetchComments().then((commentsdata) => setComments(commentsdata));
    fetchUsers().then((usersdata) => setUsers(usersdata));
  }, []);

  return (
    <>
      <div className="bg-main-bg w-full h-screen items-center flex justify-center">
        <div className="flex flex-col w-128 gap-6">
          <CreateMenu.CreateMenu />
          <div className="flex flex-col gap-4">
            <UserCard.UserCard
              posts={posts}
              users={users}
              comments={comments}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
