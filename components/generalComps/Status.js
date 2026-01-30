import React from 'react'

function Status({ label, ok }) {
    return (
        <div>
            <p className="muted">{label}</p>
            <span className={`badge ${ok ? 'ok' : 'bad'}`}>
                {ok ? 'OK' : 'Needs Attention'}
            </span>
        </div>
    )
}

export default Status