import TrollFace from './images/troll-face.png'
import React from 'react'
import '../css/header.css'

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="header">
            <img
                src={TrollFace}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <button onClick={changeDarkMode} type='button'>Dark Mode</button>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )

    function changeDarkMode() {
        setDarkMode(prevDark => !prevDark)
    }

}

export default Header
