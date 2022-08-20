import React from 'react';

export default function Main({ answer }) {
    return (
        <main className='main'>
            <div>
                <h2>Computer Says</h2>
                <div className='answer-text'>{ answer }</div>
            </div>
        </main>
    )
}