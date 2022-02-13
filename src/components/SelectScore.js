import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function SelectScore() {
    const [score, setScore] = useState(0); // initial state
    const increment = () => setScore(score === 100 ? score : score + 1 ); // increment
    const decrement = () => setScore(score === 0 ? 0 : score - 1);        // decrement

    return (
        <div id="ScoreAlign">
            <AiFillCaretUp onClick={increment} className="pointer" />
            <span className="Score">{score}</span>
            <AiFillCaretDown onClick={decrement} className="pointer" />
        </div>
    );
}

export default SelectScore;