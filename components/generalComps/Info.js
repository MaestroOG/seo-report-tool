import React from 'react'

function Info({ label, value }) {
    return (
        <div>
            <p className="muted">{label}</p>
            <p style={{ fontWeight: 600 }}>{value || '-'}</p>
        </div>
    )
}

export default Info