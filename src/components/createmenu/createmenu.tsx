import { useState } from "react";
import { TextTypeI } from "../../pages/type";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

function CreateMenu() {
  const [text, setText] = useState(String);
  const [name, setName] = useState(String);
  const [mail, setMail] = useState(String);
  const tt: TextTypeI = [];

  function test() {
    tt.push(text, name, mail);
    console.log(tt.toString());
  }

  return (
    <div className="bg-element-bg rounded-xl">
      <form action="">
        <Menu>
          <div className="flex flex-row gap-6 p-4">
            <MenuButton>
              <img
                src={"./public/user.png"}
                alt="User İmage"
                className="rounded-full w-12"
              />
            </MenuButton>
            <input
              type="text"
              placeholder="Let's share what going on your mind..."
              className="w-full bg-input-bg placeholder:text-placeholder indent-3 text-white/70 rounded"
              required
              onChange={(e) => {
                setText(e.currentTarget.value);
              }}
            />
            <input
              type="button"
              value="Create Post"
              onClick={() => test()}
              className="bg-button-bg text-white w-40 font-semibold rounded hover:cursor-pointer"
            />
          </div>
          <MenuItems>
            <div className="absolute flex flex-col justify-between gap-2 z-20 bg-slate-700 w-128 p-4 mt-2 rounded-xl">
              <input
                type="email"
                placeholder="Mail"
                onChange={(e) => setMail(e.currentTarget.value)}
                value={mail}
                className="bg-input-bg p-2 rounded text-white/70"
              />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                className="bg-input-bg p-2 rounded text-white/70"
              />
            </div>
          </MenuItems>
        </Menu>
      </form>
    </div>
  );
}

export default CreateMenu;
