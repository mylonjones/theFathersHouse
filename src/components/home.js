import React, {useState} from 'react';

export default function Home() {

  const submitHandler = (e) => {
    e.preventDefault()

    setContent(
      <div>
        You are signed up!
      </div>
    )
  }

  const [modalContent, setContent] = useState(
    <form
    className='signUpSubmission'
    onSubmit={submitHandler} >
      <label>
        Name:
        <input type='text' />
      </label>
      <label>
        Email:
        <input type='text' />
      </label>
      <label>
        <input
          type='submit'
          value='sign up' />
      </label>
    </form>
  )

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

  return (
    <div className='home space'>

      <div className='titleContainer'>
        <div className='title'>The Father's House</div>
      </div>

      <div className='welcomeVideo' >
        <iframe
        className='video'
        title='welcome'
        src={`//www.youtube.com/embed/RSe4mjqmwsQ`}
        ></iframe>
      </div>

      <div className='signUp'>

        <div>Click here to sigh up for our news letter!</div>
        <button className='signUpButton' onClick={showDialog} >Sign Up!</button>

        <div className='grayout modal' onClick={closeDialog} ></div>
        <div className='signUpForm modal' >
          {modalContent}
        </div>

      </div>

    </div>
  )
}