import React from 'react'

import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 5, min: 4 },
  wordsPerSentence: { max: 7, min: 4 }
})

export default function Info() {
  return (
    <div className='space'>
      <div className='header bold' >Learn about our church and leaders!</div>
      <div>

        <div id='about' className='mainInfo split'>
          <img
            className='storyImage'
            src='photos/churchPeople.jpeg'
            alt='couple'
          />
            <div className='bold'>Our Story</div>
            {lorem.generateParagraphs(3)}
        </div>

        <div id='times' className='basicInfo' >
          We are located at 2850 B sreet Rosamond Ca, 93560
          <br/>
          Services are Sunday from 8:30 to 9:45 am
          <br/>
          Contact us by phone at: 1-234-567-8910
          <br/>
          Or by email at: resources@befitness.com
          <br/>
          Follow us on Face Book: The Father's House
        </div>

        <div id='pastors' className='subInfo split'>
          <img
            className='photo'
            src='photos/couple.jpeg'
            alt='couple'
          />
          <div className='content'>
            <div className='bold'>{lorem.generateWords(2)}</div>
            {lorem.generateParagraphs(1)}
          </div>
        </div>

        <div className='subInfo split'>
          <img
            className='photo'
            src='photos/pastor.jpeg'
            alt='couple'
          />
          <div className='content'>
            <div className='bold'>{lorem.generateWords(2)}</div>
            {lorem.generateParagraphs(1)}
          </div>
        </div>

        <div className='mainInfo split' >
          <div className='bold'>Our Beliefs</div>
          {lorem.generateParagraphs(3)}
        </div>

      </div>
    </div>
  )
}