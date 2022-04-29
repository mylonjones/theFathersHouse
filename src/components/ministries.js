import React, { useEffect, useState } from 'react'
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react";

export default function Ministries() {

  const [allMinistries, setMinistries] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "ministry"] | order(publishedAt) {
          title,
          description,
          body
        }`
      )
      .then((data) => setMinistries(data))
      .catch(console.error);
  }, []);

  return (
    <div className='space'>
      <div className='participationHeader'>
        <div className='bold' >Welcome to our participation page</div>
        <div className='participationInvite' >Learn about our ministry opportunities and upcoming events</div>
      </div>
      <div id='ministries' className='ministryList'>
        {allMinistries && allMinistries.map(ministry => {
          return (
            <div className='mainInfo split' >
              <div className='bold'>{ministry.title}</div>
              <div className='description' >{ministry.description}</div>
              <BlockContent
                blocks={ministry.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
            </div>
          )
        })}
      </div>

    </div>
  )
}