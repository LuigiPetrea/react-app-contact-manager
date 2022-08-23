import React from 'react';

function InputsContacts (){
    return (
        <>
        <input id="name" type="text" className='inputs' placeholder='Jovetic Alonse' autoComplete='off' required/>
        <input id="phone" type="phone" className='inputs' placeholder="+44 781 001 2615" autoComplete='off' required/><br />
        <button className='btn'>Add Contact</button>
        </>
    );
}
export default InputsContacts;