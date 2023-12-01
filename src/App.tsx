import React, { useRef } from "react";
import { Outlet} from "react-router-dom";
import Header from "./components/Header";
// import MenuModal from "./components/MenuModal";
import Footer from './components/Footer';


function App() {
  const menuModal = useRef<HTMLInputElement | null>(null);


  return (
    <div className="min-w-screen bg-[#fde7b4] min-h-screen">

        <div className="flex flex-col justify-center items-center w-full">
          <Header />
          {/* <MenuModal menuModal={menuModal} /> */}
          <Outlet
            context={{
              
            }}
          />
          <Footer />
        </div>
    </div>
  );
}

export default App;
