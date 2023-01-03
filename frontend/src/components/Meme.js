import React from 'react'
import '../css/meme.css'

const Meme = () => {
    return (
        <section className='meme'>
            <form className='meme--form'>
                <div className='meme--inputs'>
                    <input type="text" placeholder='Top text' className='meme--input br-4' />
                    <input type="text" placeholder='Bottom text' className='meme--input br-4' />
                </div>
                <button type='submit' className='meme--btn br-4'>Get a new meme image</button>
            </form>
        </section>
    )
}

export default Meme