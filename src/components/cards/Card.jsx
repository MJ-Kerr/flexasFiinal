import React from 'react'
import './card.css';
const Card = () => {
    return (
        <div class="scene">
            <div class="card">
                <div class="card__face card__face--front">
                    <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt='flexas' />
                </div>
                <div class="card__face card__face--back">
                    <a href='#pictures'>
                        <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" alt='flexas' />
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card__face card__face--front">
                    <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt='flexas' />
                </div>
                <div class="card__face card__face--back">
                    <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt='flexas' />
                </div>
            </div>
            <div class="card">
                <div class="card__face card__face--front">
                    <img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt='flexas' />
                </div>
                <div class="card__face card__face--back">
                    <img src="https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg" alt='flexas' />
                </div>
            </div>
        </div>

    )
}

export default Card