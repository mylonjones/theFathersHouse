import React from 'react';
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: { max: 7, min: 4 },
//   wordsPerSentence: { max: 10, min: 4 }
// });


const showDialog = () => {
  document.getElementById('modal').classList.add('show')
  const scrollY = window.scrollY + 'px';
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};

const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('modal').classList.remove('show');
}

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

      <div className='spacer2'>
        <div>Click here to sigh up for our news letter!</div>
        <button className='signUp' onClick={showDialog} >Sign Up!</button>
        <div id='modal' onClick={closeDialog} >
          this is my modal
        </div>
      </div>

    </div>
  )
}