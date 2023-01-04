import React, { useState } from 'react'
import '../css/meme.css'
import memesData from '../memes-data'

const shuffleArray = function (array) {
    let i = array.length;
    let j;
    let temp;

    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }

    return array;
}

const Meme = () => {
    let memes = memesData.data.memes
    const [memeImage, setMemeImage] = useState('')
    const [imagesCount, setImagesCount] = useState(0)
    function getMemeImage() {
        setMemeImage(function () {
            console.log(imagesCount)
            return memes[imagesCount].url
        })
        setImagesCount(prevCount => prevCount + 1)
        if (imagesCount >= memes.length - 1) {
            console.log('IIIIIIIIIIIIIII')
            memes = shuffleArray(memes)
            console.log(memes)
            setImagesCount(0)
        }
    }

    return (
        <section className='meme'>
            <section className='meme--form'>
                <div className='meme--inputs'>
                    <input type="text" placeholder='Top text' className='meme--input br-4' />
                    <input type="text" placeholder='Bottom text' className='meme--input br-4' />
                </div>
                <button type='submit' className='meme--btn br-4' onClick={getMemeImage}>Get a new meme image</button>
                <img src={memeImage} alt="" />
            </section>
        </section>
    )
}

export default Meme