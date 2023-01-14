import React, { useState } from 'react'
import '../css/meme.css'
// import memesData from '../memes-data'
import Axios from "axios"

const Meme = ({ darkMode }) => {
    const [memes, setMemes] = useState({})
    const [memeImage, setMemeImage] = useState('')
    const [imagesCount, setImagesCount] = useState(0)
    const [memeData, setMemeData] = useState({
        topText: '',
        bottomText: ''
    })

    function getMemes() {
        Axios({
            method: 'get',
            url: "https://api.imgflip.com/get_memes"
        })
            .then(data => { console.log(data); setMemes(shuffleArray(data.data.data.memes)) })
    }

    React.useEffect(function () {
        getMemes()
    }, [])

    function getMemeImage() {
        if (imagesCount == 0 || imagesCount >= memes.length - 1) {
            // setMemes(() => shuffleArray(memes))
            getMemes()
            console.log(memes)
            setImagesCount(0)
        }
        setMemeImage(function () {
            return memes[imagesCount].url
        })
        setImagesCount(prevCount => prevCount + 1)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setMemeData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }


    return (
        <section className='meme'>
            <section className='meme--form'>
                <div className='meme--inputs'>
                    <input type="text"
                        placeholder='Top text'
                        className='meme--input br-4'
                        onChange={handleChange}
                        name="topText"
                        value={memeData.topText}
                    />
                    <input
                        type="text"
                        placeholder='Bottom text'
                        className='meme--input br-4'
                        onChange={handleChange}
                        name="bottomText"
                        value={memeData.bottomText}
                    />
                </div>
                <button
                    type='submit'
                    className='meme--btn br-4'
                    onClick={getMemeImage} 
                    disabled={memes[0] && memes[0].url ? '' : 'true'}
                    >
                    Get a new meme image
                </button>
                <div className="meme">
                    <img src={memeImage} alt="" className="meme--image" />
                    <h2 className="meme--text top">{memeData.topText}</h2>
                    <h2 className="meme--text bottom">{memeData.bottomText}</h2>
                </div>
            </section>
        </section>
    )
}

export default Meme



function shuffleArray(array) {
    let i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}