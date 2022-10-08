import React from 'react';

import face from '../images/TrollFace.png'

export default function Header(){
    return(
    <header className='header'>
        <img src={face} className='header-image' />
        <h2 className='header-title'>Meme Generator</h2>
    </header>
    )
}