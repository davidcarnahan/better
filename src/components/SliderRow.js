import React from 'react';

function SliderList( {discipline} ) {
    return (
        <tr>
            <td>{discipline.name}</td>
            <td>{discipline.score}</td>
        </tr>
    )
}

export default SliderList;