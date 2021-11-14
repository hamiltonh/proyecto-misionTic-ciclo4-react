import React from 'react'

const Button = () => {
    return (
        <div>
            <button className='boton' onClick={ ()=>alert('click') }>Boton como componente</button>
        </div>
    )
}

export default Button
