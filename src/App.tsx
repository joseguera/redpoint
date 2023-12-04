import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import MenuModal from "./components/MenuModal";
import Footer from "./components/Footer";

function App() {
  const menuModal = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col justify-between items-center w-full h-screen lg:overflow-x-clip">
      <Header />
      {/* <MenuModal menuModal={menuModal} /> */}
      <Outlet context={{}} />
      <Footer />
    </div>
  );
}

export default App;
