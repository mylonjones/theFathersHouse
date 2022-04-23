import React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav'
import Home from './components/home'
import Info from './components/info'
import Media from './components/media'
import Blog from './components/blog'
import Footer from './components/footer'
import BlogPost from './components/blogPost'
import Ministries from './components/ministries'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ministries' element={<Ministries />} />
        <Route path='media' element={<Media />} />
        <Route path='blog' element={<Blog />} />
        <Route path='info' element={<Info />} />
        <Route path='/:slug' element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
