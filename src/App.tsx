import { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comments {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [comments, setComments] = useState<Comments[]>([]);
  const [users, setUsers] = useState<Users[]>([]);

  const test = posts.slice(0, 3);

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
          <div className="bg-element-bg rounded-xl">
            <div className="flex flex-row gap-6 p-4">
              <img
                src={"./public/user.png"}
                alt="User İmage"
                className="rounded-full w-10"
              />
              <input
                type="text"
                placeholder="Let's share what going on your mind..."
                className="w-full bg-input-bg placeholder:text-placeholder indent-3 text-white/70 rounded"
              />
              <button className="bg-button-bg text-white w-40 font-semibold rounded">
                Create Post
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {test.map((data) => (
              <div className="bg-element-bg rounded-xl">
                <div className="flex flex-row justify-between gap-6 p-4">
                  <img src={"./public/user.png"} className="rounded-xl h-40" />
                  <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-row justify-between">
                      <span className="text-white font-medium text-lg w-full">
                        {data.title}
                      </span>
                      <button className="bg-like-bg p-1 rounded-full text-xl h-fit">
                        <IoMdHeartEmpty className="text-white" />
                      </button>
                    </div>
                    <div className="flex flex-row h-12 gap-2">
                      <img
                        src={"./public/user.png"}
                        alt=""
                        className="h-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          Pavel Gvay
                        </span>
                        <span className="text-xs text-white/70">
                          3 weeks ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
