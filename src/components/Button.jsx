import React from 'react'

const Button = ({ texto = 'Boton como componente', color = 'coral' }) => {
    return (
        <div>
            <button className='boton' onClick={ ()=>alert('click') }>   {texto}</button>
        </div>
    )
}

export default Button
