import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Blog() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt) {
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name
        }`
      )
      .then((data) => {
        setAllPosts(data)
        console.log(data)
      })
      .catch(console.error);
  }, []);

  return (
    <div className='space' >
      {allPostsData &&
        <div className='blog' >
          <div className='blogHeading'>
            <img className='blogImage' src={urlFor(allPostsData[0].mainImage).url()} alt="" />
            <div>
              <div className='blogTitle' >{allPostsData[0].title}</div>
              <div className='blogAuthor' >{allPostsData[0].name}</div>
            </div>
          </div>

          <div className='blogContent' >
            <BlockContent
              blocks={allPostsData[0].body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      }

      <div className='blogDisplay' >
        <div className='blogPostTitle' >Blog Posts</div>
        <div className='blogList' >
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <div className='blogLink' key={index}>
                  <div className='previewTitle'>{post.title}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}