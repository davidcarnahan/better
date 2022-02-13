// import dependencies
import React from 'react';

// import data
import pledges from './data/pledges'
import quotes from './data/quotes'

// import components
import Pledge from './components/Pledge';
import Quote from './components/Quote'
import DiscreteSliderSteps from './components/Progress';

// import styles and images
import './App.css';

function App() {
  return (
    <div className="App-box">
      <div className="App-quote">
        <Quote quotes={quotes} />
      </div>
{/*       <div className="sliders">
        <div id="wisdom">
          <label for="wisdom">Wisdom</label>
          <DiscreteSliderSteps />
        </div>
        <div id="courage">
          <label for="wisdom">Courage</label>
            <div className="slider-box">
              <DiscreteSliderSteps />
            </div>
        </div>
        <div id="justice">
          <label for="wisdom">Justice</label>
          <DiscreteSliderSteps />
        </div>
        <div id="moderation">
          <label for="wisdom">Moderation</label>
          <DiscreteSliderSteps />
        </div>
      </div> */}
      <div className="App-pledge">
        <div id="pledge-text">
          <Pledge pledges={pledges} />
        </div>
      </div>
    </div>
    );
}

export default App;
