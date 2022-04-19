import React, {useState} from 'react';
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: { max: 7, min: 4 },
//   wordsPerSentence: { max: 10, min: 4 }
// });




const showDialog = () => {
  const modals = document.getElementsByClassName('modal')
  for(let modal of modals) modal.classList.add('show')
  const scrollY = window.scrollY;
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
};

const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  const modals = document.getElementsByClassName('modal')
  for(let modal of modals) modal.classList.remove('show');
}



export default function Home() {

  const [modalContent, setContent] = useState(
    <form onSubmit={(e)=>{submitHandler(e)}} >
      <label>
        Name:
        <input type='text' ></input>
      </label>
      <br/>
      <br/>
      <label>
        Email:
        <input type='text' ></input>
      </label>
      <br/>
      <br/>
      <label>
        <input type='submit' value='sign up' ></input>
      </label>
    </form>
  )

  const submitHandler = (e) => {
    e.preventDefault()

    setContent(
      <div>
        You are signed up!
      </div>
    )
  }

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
          <div className='grayout modal' onClick={closeDialog} ></div>
          <div className='signUpForm modal' >
            {modalContent}
          </div>
      </div>

    </div>
  )
}