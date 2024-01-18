import React from 'react'

function Button({valuz, text, onClick}) {
    const inCount = () => {
        return onClick(valuz + 1);
    }

    return (
    <button onClick={inCount}>{text}</button>
  )
}

export default Button