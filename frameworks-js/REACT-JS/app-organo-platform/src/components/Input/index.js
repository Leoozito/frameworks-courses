import './Input.css'
import { useState } from 'react'

export default function Input(props) {

    const [valor, setValor] = useState("")

    const aoDigitado = (e) => {
        props.onAlterado(e.target.value)
    }

    return (
        <div className='input-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}