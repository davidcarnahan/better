import React from 'react';
import SliderRow from './SliderRow';

function SliderTable( {disciplines, score } ) {
    return (
        <table id="disciplines">
            <thead>
                <th>Discipline</th>
                <th>Score</th>
            </thead>
            <tbody>
                {disciplines.map((discipline, i) => <SliderRow key={i} discipline={discipline} />)}
            </tbody>
        </table>
    )
}

export default SliderTable;