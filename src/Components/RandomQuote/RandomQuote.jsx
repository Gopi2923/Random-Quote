import React, {useState} from 'react'
import './RandomQuote.css'
import reload_icon from '../../assets/reload.avif'
import twitter_icon from '../../assets/twitter.jpg'

const RandomQuote = () => {

    let quotes = [];
 
    async function loadQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra"
    })

    const random = () => {
      const select = quotes[Math.floor(Math.random()*quotes.length)]
      setQuote(select);
    }
    

   const twitter = () => {
     window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(",")[0]}`)
   }

    loadQuotes();

  return (
    <div className='container'>
       <div className="quote">
        {quote.text}
       </div>
       <div className="line"></div>
       <div className="bottom">
        <div className="author">- {quote.author.split(",")[0]}</div>
        <div className="icons">
            <img src={reload_icon} alt=""  onClick={() => {random()}}/>
            <img src={twitter_icon} alt="" onClick={() => {twitter()}}/>
        </div>
       </div>
    </div>
  )
}

export default RandomQuote