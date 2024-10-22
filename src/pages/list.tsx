import { CreateMenu, PostCard } from "../components";

function List() {
  return (
    <div className="flex flex-col w-128 gap-6">
      <CreateMenu />
      <div className="flex flex-col gap-4">
        <PostCard />
      </div>
    </div>
  );
}

export default List;
