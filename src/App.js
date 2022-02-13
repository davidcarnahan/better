// import dependencies
import React from 'react';

// import data
import pledges from './data/pledges'
import quotes from './data/quotes'
import disciplines from './data/disciplines';

// import components
import Pledge from './components/Pledge';
import Quote from './components/Quote'
import SliderTable from './components/SliderTable';

// import styles and images
import './App.css';

function App() {
  return (
    <div className="App-box">
      <div className="App-quote">
        <Quote quotes={quotes} />
      </div>
      <div>
        <SliderTable disciplines={disciplines}/>
      </div>
      <div className="App-pledge">
        <div id="pledge-text">
          <Pledge pledges={pledges} />
        </div>
      </div>
    </div>
    );
}

export default App;
