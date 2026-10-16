import { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Repositories from "./Repositories";
import Footer from "./Footer";

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;
