import React from 'react';

function Pledge( {pledges} ) {
    return (
        <div>
            <p>{pledges[0].text}</p>
        </div>
    )
}

export default Pledge;