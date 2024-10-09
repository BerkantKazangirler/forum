import { IoMdHeartEmpty } from "react-icons/io";
function App() {
  return (
    <>
      <div className="bg-main-bg w-full flex justify-center">
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
            <div className="bg-element-bg rounded-xl">
              <div className="flex flex-row justify-between gap-6 p-4">
                <img src={"./public/user.png"} className="rounded-xl h-40" />
                <div className="flex flex-col w-full justify-between">
                  <div className="flex flex-row justify-between">
                    <span className="text-white font-medium text-lg w-full">
                      test
                    </span>
                    <span className="bg-like-bg p-1 rounded-full text-xl h-fit">
                      <IoMdHeartEmpty className="text-white" />
                    </span>
                  </div>
                  <div className="flex flex-row h-12 gap-2">
                    <img
                      src={"./public/user.png"}
                      alt=""
                      className="h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Pavel Gvay</span>
                      <span className="text-xs text-white/70">3 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-element-bg rounded-xl">
              <div className="flex flex-row justify-between gap-6 p-4">
                <img src={"./public/user.png"} className="rounded-xl h-40" />
                <div className="flex flex-col w-full justify-between">
                  <div className="flex flex-row justify-between">
                    <span className="text-white font-medium text-lg w-full">
                      test
                    </span>
                    <span className="bg-like-bg p-1 rounded-full text-xl h-fit">
                      <IoMdHeartEmpty className="text-white" />
                    </span>
                  </div>
                  <div className="flex flex-row h-12 gap-2">
                    <img
                      src={"./public/user.png"}
                      alt=""
                      className="h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Pavel Gvay</span>
                      <span className="text-xs text-white/70">3 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-element-bg rounded-xl">
              <div className="flex flex-row justify-between gap-6 p-4">
                <img src={"./public/user.png"} className="rounded-xl h-40" />
                <div className="flex flex-col w-full justify-between">
                  <div className="flex flex-row justify-between">
                    <span className="text-white font-medium text-lg w-full">
                      test
                    </span>
                    <span className="bg-like-bg p-1 rounded-full text-xl h-fit">
                      <IoMdHeartEmpty className="text-white" />
                    </span>
                  </div>
                  <div className="flex flex-row h-12 gap-2">
                    <img
                      src={"./public/user.png"}
                      alt=""
                      className="h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Pavel Gvay</span>
                      <span className="text-xs text-white/70">3 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-element-bg rounded-xl">
              <div className="flex flex-row justify-between gap-6 p-4">
                <img src={"./public/user.png"} className="rounded-xl h-40" />
                <div className="flex flex-col w-full justify-between">
                  <div className="flex flex-row justify-between">
                    <span className="text-white font-medium text-lg w-full">
                      test
                    </span>
                    <span className="bg-like-bg p-1 rounded-full text-xl h-fit">
                      <IoMdHeartEmpty className="text-white" />
                    </span>
                  </div>
                  <div className="flex flex-row h-12 gap-2">
                    <img
                      src={"./public/user.png"}
                      alt=""
                      className="h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Pavel Gvay</span>
                      <span className="text-xs text-white/70">3 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
