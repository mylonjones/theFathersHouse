import React from 'react'

import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 5, min: 4 },
  wordsPerSentence: { max: 7, min: 4 }
})

export default function Info() {
  return (
    <div className='space'>
      <div className='infoMessage' >Learn about our church and leaders!</div>
      <div>

        <div className='mainInfo split'>
          <img
            className='photo'
            src='photos/churchPeople.jpeg'
            alt='couple'
          />
          <div className='content'>
            <div className='bold'>{lorem.generateWords(2)}</div>
            {lorem.generateParagraphs(1)}
          </div>
        </div>

        <div className='basicInfo' >
          We are located at 2850 B sreet Rosamond Ca, 93560
          <br/>
          Join us Sunday from 8:30 to 9:45 am
          <br/>
          Contact us by phone at: 1-234-567-8910
          <br/>
          Or by email at: resources@befitness.com
        </div>

        <div className='subInfo split'>
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

      </div>
    </div>
  )
}