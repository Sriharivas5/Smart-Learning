import React, { useState } from 'react'
import './Selectors.css'
import girPng from './assets/girlPng.png'
import tigerPng from './assets/tigerPng.png'
import hemanPng from './assets/hemanPng.png'
import girPng2 from './assets/girlPng2.png'
import shaggyPng from './assets/shaggyPng.png'
import scoobyDogPng from './assets/scoobyDogPng.png'
const Selectors = () => {
    const [input, setInput] = useState('')
    const [finalInput, setFinalInput] = useState('')
    const [showCondition, setShowCondition] = useState(false)

    const handleCLick = () => {
        setFinalInput(input)
        setShowCondition(true)

    }
    const jsxCode = `
    <p>Select this tag using selectors to save the girl</p>
`;

    return (
        <div className='selectors'>
            <div className='objects'>
                <img src={tigerPng} id='tiger' />
                {showCondition && (
                    finalInput.toLocaleLowerCase() === 'p' ?
                       <img src={hemanPng}  id='hemanPng'/> :
                        ''
                )}
                <img src={girPng2} id='girl' />

            </div>
            <div className='questions'>


                <pre><h2>{jsxCode}</h2></pre>


                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div >
                        <img src={hemanPng} id='hemanPng' />
                        <h1>P</h1>

                    </div>


                    <div>
                        <img src={shaggyPng} id='shaggyPng' />
                        <h1>#para</h1>
                    </div>

                    <div>
                        <img src={scoobyDogPng} id='scoobyDogPng' />
                        <h1>.para</h1>

                    </div>

                </div>
                <div className='selectorsInput'>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter the Selelector here' onKeyDown={(e) => {
                        if (e.key == 'Enter')
                            handleCLick();

                    }} />
                    <button onClick={handleCLick}>Start the game</button>
                </div>





                {showCondition && (
                    finalInput.toLocaleLowerCase() === 'p' ?
                        <h1>Hurray you saved the girl </h1> :
                        <h1>Oh pitty you didn't select the tag properly tiger killed the girl</h1>
                )}


            </div>

        </div>
    )
}

export default Selectors



