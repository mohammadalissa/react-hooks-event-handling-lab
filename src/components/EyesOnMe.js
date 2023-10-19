// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
    return (
        <button onFocus={con => console.log('Good!')} onBlur={con => console.log('Hey! Eyes on me!')}>'Eyes on me'</button>
    )
}

export default EyesOnMe