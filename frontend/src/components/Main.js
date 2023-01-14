import React from 'react'
import Meme from './Meme'

const Main = ({ darkMode }) => {
  return (
    <main>
      <Meme darkMode={darkMode} />
    </main>
  )
}

export default Main