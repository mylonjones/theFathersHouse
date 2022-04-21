import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Blog() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className='space' >
      <div className='blogDisplay' >
        <div className='blogPostTitle' >Blog Posts</div>
        <div className='blogList' >
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <div className='blogLink' key={index}>
                  {/* <img className='previewImage' src={post.mainImage.asset.url} alt="" /> */}
                  <div className='previewTitle'>{post.title}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}