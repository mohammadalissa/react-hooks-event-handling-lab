// Code Keypad Component Here

function Keypad() {
    return (
        <input type="password" onChange={con => console.log('Entering password...')}></input>
    )
}

export default Keypad;