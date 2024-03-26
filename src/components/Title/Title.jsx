import React from 'react'
import './Title.css'

const Title = ({fst, content, className}) => {
  return (
    <div id="title" className={className}>
      {fst ? <h1>{content}</h1> : <h2>{content}</h2>}
    </div>
  )
}

export default Title