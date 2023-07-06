import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import './card.css';
const Card = () => {
    return (
        <div id='streams'>
            <h1 className='header flicker-1'>Event Fliers</h1>
            <div class="scene">
                <div class="card">
                    <div class="card__face card__face--front">
                        <Zoom>
                            <img src="https://i.imgur.com/YINVDLm.png" alt='flexas' />
                        </Zoom>
                    </div>
                    <div class="card__face card__face--back">
                        <Zoom>
                            <img src="https://i.imgur.com/fMIk1dW.png" alt='flexas' />
                        </Zoom>
                    </div>
                </div>
                <div class="card">
                    <div class="card__face card__face--front">
                        <Zoom>
                            <img src="https://i.imgur.com/1M2eBfv.png" alt='flexas' />
                        </Zoom>
                    </div>
                    <div class="card__face card__face--back">
                        <Zoom>
                            <img src="https://i.imgur.com/fxQojSb.jpg" alt='flexas' />
                        </Zoom>
                    </div>
                </div>
                <div class="card">
                    <div class="card__face card__face--front">
                        <Zoom>
                            <img src="https://i.imgur.com/biP0tal.jpg" alt='flexas' />
                        </Zoom>
                    </div>
                    <div class="card__face card__face--back">
                        <Zoom>
                            <img src="https://i.imgur.com/hG53HdX.jpg" alt='flexas' />
                        </Zoom>
                    </div>
                </div>
                <div class="card">
                    <div class="card__face card__face--front">
                        <Zoom>
                            <img src="https://i.imgur.com/OdQXFsf.jpg" alt='flexas' />
                        </Zoom>
                    </div>
                    <div class="card__face card__face--back">
                        <Zoom>
                            <img src="https://i.imgur.com/TnqLofo.png" alt='flexas' />
                        </Zoom>
                    </div>
                </div>
                <div class="card">
                    <div class="card__face card__face--front">
                        <Zoom>
                            <img src="https://i.imgur.com/VmZCC5Y.png" alt='flexas' />
                        </Zoom>
                    </div>
                    <div class="card__face card__face--back">
                        <Zoom>
                            <img src="https://i.imgur.com/FL4Qsn8.png" alt='flexas' />
                        </Zoom>
                    </div>
                </div>
                <div class="card">
                    <div class="card__face card__face--front">
                        <Zoom>
                            <img src="https://i.imgur.com/3BSdggL.jpg" alt='flexas' />
                        </Zoom>
                    </div>
                    <div class="card__face card__face--back">
                        <Zoom>
                            <img src="https://i.imgur.com/HEhhyKs.png" alt='flexas' />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card