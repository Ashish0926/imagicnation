import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <Router>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <div className="flex gap-3">
            <img src={logo} alt="logo" className="w-7 object-contain" />
            <h3 className="font-semibold text-2xl">imagicnation</h3>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link
            to="/"
            className="font-inter font-medium bg-black text-white px-4 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="font-inter font-medium bg-black text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
