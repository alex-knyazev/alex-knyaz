import React from 'react'
import Typing from 'react-typing-animation';

import './index.css'

export default () => {
  const runAnimation = () => {
  }

  return (
    <div className="MainPage">
      <div>
        <Typing 
          speed={10} 
          onFinishedTyping={runAnimation}
          cursor={<TypingCursor />}
        >
          <p className="MainPage-AnimatedText">
            Hey, I'm a web engeneer from Novocherkassk, Russia.
          </p>
          <Typing.Delay ms={600} />
          <p className="MainPage-AnimatedText">
            I make web applications.
          </p>
        </Typing>
      </div>
    </div>
  )
}

const TypingCursor = () => {
  return '|'
}
