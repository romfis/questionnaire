import React from 'react'

import { ComparisonQuestion, GapsQuestion } from 'questionnaire'
import 'questionnaire/dist/index.css'

const COMPARISON_QUESTIONS = [
  {
    question: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png',
    answers: [
      'ball'
    ],
    options: [
      'ball',
      'sphere',
      'chess',
      'potato'
    ],
  },
  {
    question: 'https://cdn.webshopapp.com/shops/212063/files/215250743/6ku-fixie-single-speed-bike-barcelona.jpg',
    answers: [
      'bike',
    ],
    options: [
      'bike',
      'helmet',
      'square',
      'fish',
    ]
  },
  {
    question: 'https://images.ctfassets.net/wmdwnw6l5vg5/71jz89dFBIdA9KHrLh8T0h/c4c0a817afe77c35ff5a1461f052b03f/economy.png',
    answers: [
      'car',
    ],
    options: [
      'car',
      'house',
      'road',
      'sky'
    ]
  },
];

const GAPS_QUESTIONS = [
  {
    question: 'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.',
    answers: [
      'programming',
      'web'
    ],
  },
  {
    question: 'Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.',
    answers: [
      'NoSQL'
    ]
  },
  {
    question: 'MySQL is a freely available open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL)',
    answers: [
      'open source',
      'SQL'
    ]
  },
];

const App = () => {
  const handleChange = (answered, correctAnswers) => {
    console.log({
      answered,
      correctAnswers
    })
  }

  return (
    <div className={'wrapper'}>
      <h3>Comparison questions</h3>
      {
        COMPARISON_QUESTIONS.map(({ question, options , answers}, i) => {
          return (
            <ComparisonQuestion
              key={i}
              question={question}
              options={options}
              onChange={(value) => handleChange(value, answers)}
            />
          )
        })
      }
      <br/>
      <h3>Gaps questions</h3>
      {
        GAPS_QUESTIONS.map(({ question, answers }, i) => {
          return (
            <div key={i}>
              <h4>Question #{i + 1}</h4>
              <GapsQuestion
                question={question}
                exclude={answers}
                onChange={(value) => handleChange(value, answers)}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default App
