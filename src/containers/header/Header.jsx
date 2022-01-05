import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'
const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Checkout amazing Collection of Survey Instruments</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Sit cum, molestiae, dicta libero, molestias optio 
                    ex obcaecati aspernatur atque est porro tempore adipisci 
                    minima magnam? 
                    Quos reprehenderit consequatur cumque molestias!</p>
                <div className="gpt3__header-content__input">
                    <input type="email"  placeholder='Your Email Address'/>
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1600 people requested access to visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
