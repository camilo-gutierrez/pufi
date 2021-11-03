import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/all'

export default function Input() {
    return (
        <div className='form-container'>
            <div className='form-box' >
                <p>Ingresa tu email</p>
                <AiOutlineArrowRight size={15} />
            </div>
        </div>
    )
}
