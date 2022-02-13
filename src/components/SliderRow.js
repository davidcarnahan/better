import React from 'react';
import SelectScore from './SelectScore'

function SliderList({ discipline }) {
    return (
        <tr>
            <td>{discipline.name}</td>
            <td><SelectScore /></td>
        </tr>
    )
}

export default SliderList;