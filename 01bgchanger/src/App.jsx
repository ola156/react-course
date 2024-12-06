import { useState } from "react";
import BgChange from "./components/BgChange";
import Password from "./components/Password";

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      {display ? <BgChange /> : <Password />}

      <button
        onClick={() => setDisplay(!display)}
        className="absolute bg-black p-2 rounded bottom-11 left-11 text-white"
      >
        Display
      </button>
    </div>
  );
}

export default App;
