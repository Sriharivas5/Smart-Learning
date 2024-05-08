import React, { useState } from 'react'
import './Transform1.css'

const Transform1 = () => {
    const [scale, setScale] = useState(1)
    const [scaleInput, setScaleInput] = useState(1)


    const handleScale = () => {
        setScale(scaleInput)
    }
    return (
        <div className='transform'>

            {/* <div className='scale'>

                <div style={{ width: '100px', height: '100px', backgroundColor: 'white', transform: `scale(${scale})` }}>
                </div>

                <input type="text" value={scaleInput} onChange={(e) => setScaleInput(e.target.value)} />
                <button onClick={handleScale}>Enter</button>
            </div> */}


            {/* <div className="scale">
                <div style={{ width: '100px', height: '100px', backgroundColor: 'white', transform:  `skew(${scale}deg)` }}>
                </div>

                <input type="text" value={scaleInput} onChange={(e) => setScaleInput(e.target.value)} />
                <button onClick={handleScale}>Enter</button>
            </div> */}



            <div className="scale">
                <div style={{ width: '100px', height: '100px', backgroundColor: 'white', transform: `rotate(${scale}deg)` }}>
                </div>

                <input type="text" value={scaleInput} onChange={(e) => setScaleInput(e.target.value)} />
                <button onClick={handleScale}>Enter</button>
            </div>


            {/* <div className="scale">
                <div style={{ width: '100px', height: '100px', backgroundColor: 'white', transform: `translate(${scale}px)` }}>
                </div>

                <input type="text" value={scaleInput} onChange={(e) => setScaleInput(e.target.value)} />
                <button onClick={handleScale}>Enter</button>
            </div> */}

        </div>
    )
}

export default Transform1



