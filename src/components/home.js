import React from 'react';
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: { max: 7, min: 4 },
//   wordsPerSentence: { max: 10, min: 4 }
// });

export default function Home() {
  return (
    <div className='home'>
      <div className='dashPartition'>
        <div className='title-container'>
          <div className='title'>The Father's House</div>
        </div>

        <div className='spacer' >
          <iframe
          className='video'
          title='welcome'
          src={`//www.youtube.com/embed/RSe4mjqmwsQ`}
          ></iframe>
        </div>
      </div>

      <div className='spacer2'>{'Yet Another Short Phrase'}</div>

    </div>
  )
}