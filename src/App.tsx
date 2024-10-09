function App() {
  return (
    <>
      <div className="bg-main-bg w-full flex justify-center">
        <div className="flex flex-col">
          <div className="bg-element-bg w-128 rounded-xl">
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
        </div>
      </div>
    </>
  );
}

export default App;
