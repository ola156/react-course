import { useState } from "react";
import Account from "./components/Account";
import BgChange from "./components/BgChange";
import Password from "./components/Password";
import Calculator from "./components/Calculator";
import Accordian from "./components/Accordian";
import Greetings from "./components/Grettings";
import UserStatus from "./components/UserStatus";
import Temp from "./components/Temp";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Profile from "./components/Profile";
import UseReducer from "./components/UseReducer";
import Calculate from "./components/Calculate";
import MyTodo from "./components/MyTodo";
import Cal from "./components/Cal";
function App() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <Cal />
    </div>
  );
}

export default App;
