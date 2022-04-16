import React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav'
import Home from './components/home'
import Info from './components/info'
import Media from './components/media'
import Blog from './components/blog'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='info' element={<Info />} />
        <Route path='blog' element={<Blog />} />
        <Route path='media' element={<Media />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
