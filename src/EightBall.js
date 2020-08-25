'use strict';

import React, { useState } from 'react';
import './EightBall.css';

/**Initially displays a black ball that reads: 'Think of a question'
 * Clicking on the ball produces a random answer and corresponding color
 * 
 * Props: - answers = [{msg, color},...]
 * 
 * State: - msg: (default 'think of a question')
 *        - color: (default 'black')
 * 
 * App -> EightBall -> (produces answer)
 */

function randomMessage(messages) {
  const randIndx = Math.floor(Math.random()*messages.length);
  return messages[randIndx];
}


function EightBall(props) {
  const [msg, setMsg] = useState('Think of a question');
  const [color, setColor] = useState('black');
  
  const { answers } = props

  function handleClick() {
    const newAnswer = randomMessage(answers)
    setMsg(newAnswer.msg);
    setColor(newAnswer.color);
  }

  const colors = {
    backgroundColor: color,
    color: 'white'
  };

  return (
    <div className='EightBall' style={colors} onClick={handleClick}>
      <p>{msg}</p>
    </div>
  )
  

}

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

EightBall.defaultProps = { answers };


export default EightBall;