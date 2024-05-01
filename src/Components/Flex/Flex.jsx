import React, { useState } from 'react'
import './Flex.css'

const Flex = () => {
    const [justifyContent, setJustifyContent] = useState('')
    const [alignItems, setAlignItems] = useState('')

    const [justifyContentInput, setJustifyContentInput] = useState('')

    const [alignItemsInput, setAlignItemsInput] = useState('')

    const handleClick = () => {
        setJustifyContent(justifyContentInput)
        setAlignItems(alignItemsInput)
    }
    return (
        <div className='main'>
            <div className='container' style={{ display: 'flex', gap: '10px', justifyContent: `${justifyContent}`, alignItems: `${alignItems}` }}>

                <div className="object" >

                </div>
                {/* <div className="object" >

                </div> */}
            </div>
            <div className='inputContainer'>
                <div className='input'>
                    <div className='inputDiv'>
                        <h1>Display</h1>
                        <input type="text" value='Flex' readOnly />
                    </div>

                    <div className='inputDiv'>
                        <h1>Justify-Content</h1>
                        <input type="text" value={justifyContentInput} onChange={(e) => setJustifyContentInput(e.target.value)} placeholder='justify content'

                            onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    handleClick();
                            }}

                        />
                    </div>
                    <div className='inputDiv'>
                        <h1> Align-Items  </h1>
                        <input type="text" value={alignItemsInput} onChange={(e) => setAlignItemsInput(e.target.value)} placeholder='align items'

                            onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    handleClick();
                            }}

                        />
                    </div>

                </div>

                <button onClick={handleClick}>Submit</button>

            </div>
        </div>
    )
}

export default Flex
