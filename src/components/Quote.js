import React from 'react';

function Quote( {quotes} ) {
    return (
        <div>
            <p  className="quote" id="quote-text">{quotes[0].quote}</p>
            <p  className="quote" id="author">{quotes[0].author}</p>
        </div>
    )
}

export default Quote;