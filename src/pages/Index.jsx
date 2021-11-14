import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'

const Index = () => {

    // useState
    const [var1, setVar1] = useState('Valor Inicial de variable...');

    // use effect, para ejecutar alguna otra logica tras el cambio de la variable supervisada.
    useEffect(()=>{
        console.log('se ejecuta cuando cambia la variable')
    },[var1])

    return (
        <div>
            <span className='bg-yellow-400'>Welcome, this is the index!</span>
            <br />
            <span>Prueba de una variable con useState: {var1}</span>
            <br />
            <input type="text" id="input1" value={var1} onChange={e => setVar1(e.target.value)} />
            <br />
            <nav className='bg-gray-100'>
                <Link to="/contacto">Link Contacto</Link>
            </nav>
            <br />
            <Button />
        </div>
    )
}

export default Index
