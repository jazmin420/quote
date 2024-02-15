import React, { useState, useEffect } from 'react';
import './App.css'
// import Quote from './component/Quote'

function App() {
  const [quote, setQuote] = useState({});

  const fetchQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      });
  };

  return (
    <div className='body'>
    <div className='title'><h1>Random Quote Generator</h1></div>
     <div className='quote'>
     <button onClick={fetchQuote}>New Quote</button>
      {quote && (
        <div className='quote-gen'>
          <h2>" {quote.text} "</h2>
          <h5>- {quote.author}</h5>
        </div>
      )}     
    </div>
    </div>
  )
}

export default App
