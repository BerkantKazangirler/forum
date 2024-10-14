interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface props {
  data: Post[];
}

function UserPhoto({ data }: props) {
  console.log(data);

  return (
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
  );
}

export default UserPhoto;
