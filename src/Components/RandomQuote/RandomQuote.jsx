import React, {useState} from 'react'
import './RandomQuote.css'
import reload_icon from '../../assets/reload.avif'
import twitter_icon from '../../assets/twitter.jpg'

const RandomQuote = () => {

    const [quote, setQuote] = useState({
        text: "lorem",
        author: "lorem"

    })

  return (
    <div className='container'>
       <div className="quote">
        {quote.text}
       </div>
       <div className="line"></div>
       <div className="bottom">
        <div className="author">{quote.author}</div>
        <div className="icons">
            <img src={reload_icon} alt="" />
            <img src={twitter_icon} alt="" />
        </div>
       </div>
    </div>
  )
}

export default RandomQuote