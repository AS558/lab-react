import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "3SA03React";
function App() {
  return ( 
    <div>
      <div className='title'>WORD PUZZLE</div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
