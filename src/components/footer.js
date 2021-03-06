import React, { useRef } from 'react'

const copyToClipboard = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

export default function Footer() {

  const email = useRef()
  const number = useRef()

  function mouseHandlers(ref) {
    return {
      onMouseEnter: () => {
        ref.current.style.visibility = 'visible'
      },
      onMouseLeave: () => {
        ref.current.style.visibility = 'hidden'
        ref.current.textContent = 'Copy'
      }
    }
  }

  function clickHandler(content) {
    return {
      onClick: (e) => {
        copyToClipboard(content)
        e.target.textContent = 'Copied!'
      }
    }
  }

  return(
    <div className='footer'>
      <div className='contact'>
        <div {...mouseHandlers(email)} >contact@thefathershouse.com
          <button
            ref={email}
            className='copyButton'
            {...clickHandler('resources@befitness.com')}
            >Copy</button>
        </div>
        <div {...mouseHandlers(number)} >1-234-567-8910
        <button
            ref={number}
            className='copyButton'
            {...clickHandler('1-234-567-8910')}
            >Copy</button>
        </div>
      </div>
      <div className='footerLinks'>
        <div className='footerLink' onClick={()=> {window.location.replace("/#signUp")}} >News Letter</div>
        <div className='footerLink' onClick={()=> {window.location.replace("/info#times")}} >Service Times</div>
        <div className='footerLink' onClick={()=> {window.location.replace("/ministries#ministries")}} >Ministries</div>
        <div className='footerLink' onClick={()=> {window.location.replace("/ministries#ministries")}} >Events</div>
        <div className='footerLink' onClick={()=> {window.location.replace("/info#pastors")}} >Pastors</div>
        <div className='footerLink' onClick={()=> {window.location.replace("info#about")}} >About</div>
      </div>

    </div>
  )
}