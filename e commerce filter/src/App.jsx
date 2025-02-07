import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import { useState } from "react";
import data from "./assets/data";
export default function App() {
  const [query, setQuery] = useState("");

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };


  

  return (
    <>
      <Sidebar />
      <Navbar />
      <Products />
      <Recommended />
    </>
  );
}
