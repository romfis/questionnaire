import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

function extractNodes(str, tokens) {
  const nodes = []
  let pos = 0
  tokens.forEach((token) => {
    do {
      const newPos = str.indexOf(token, pos)
      nodes.push({
        text: str.substr(pos, newPos - pos),
        hidden: false
      })
      nodes.push({
        text: str.substr(newPos, token.length),
        hidden: true
      })
      pos = newPos < -1 ? newPos : newPos + token.length
    } while (pos <= -1)
  })
  if (pos < str.length) {
    nodes.push({
      text: str.substr(pos, str.length - pos),
      hidden: false
    })
  }
  return nodes
}

const GapsQuestion = ({ question, exclude, onChange }) => {
  const [nodes, setNodes] = useState([])
  const [result, setResult] = useState({})

  const handleChange = (e, i) => {
    const value = e.target.value
    setResult({
      ...result,
      [i]: value
    })
  }

  useEffect(() => {
    const nodes = extractNodes(question, exclude)
    setNodes(nodes)
  }, [question])

  useEffect(() => {
    onChange(Object.values(result))
  }, [result])

  return (
    <div>
      {nodes.map((node, i) => {
        return node.hidden ? (
          <input
            key={i}
            value={result[i] || ''}
            type='text'
            style={styles.input}
            maxLength={node.text.length}
            onChange={(event) => handleChange(event, i)}
          />
        ) : (
          <span key={i}>{node.text}</span>
        )
      })}
    </div>
  )
}

export default GapsQuestion
