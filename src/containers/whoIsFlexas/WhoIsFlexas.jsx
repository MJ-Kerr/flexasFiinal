import React from 'react'
import './whoIsFlexas.css'
import { useMediaQuery } from 'react-responsive';

const WhoIsFlexas = () => {
    const isMobile = useMediaQuery({ maxWidth: 900 });

    return (
        <div className={`container Row ${isMobile ? 'mobile' : ''}`} id='wtif'>
            <div className='about'>
                <img src='https://i.imgur.com/cIMpNHV.png' alt='flexas' className='logo  pulsate-bck' />
                <p>
                    FLEXAS IS THE RESULT OF OVER 15 YEARS EXPERIENCE IN DJING, PRODUCING,
                </p>
                <br />
                <p>
                    LIVE AUDIO & VIDEO, ONLINE STREAMING, AND CREATIVE DESIGN. FLEXAS HAS,
                </p>
                <br />
                <p>
                    PERFORMED LIVE AT SEVERAL FESTIVALS AND HELD DJ RESIDENCIES AT DOZENS
                </p>
                <br />
                <p>
                    OF NIGHTCLUBS OVER THE SOUTHWEST U.S. SINCE 2008. STARTING IN 2023,
                </p>
                <br />
                <p>
                    FLEXAS BEGAN A SHIFT TO STREAMING CONTENT ONLINE AND STRIVES TO IMPROVE,
                </p>
                <br />
                <p>
                    DEVELOP, AND CREATE NEW EXPERIENCES FOR VIEWERS AROUND THE GLOBE.
                </p>
            </div>
            <div>
                <img src="https://i.imgur.com/9ASm0g1.jpg" alt='djHero' className='city' />
            </div>
        </div>
    )
}

export default WhoIsFlexas