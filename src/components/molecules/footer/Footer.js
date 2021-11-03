import React from 'react'
import { FaFacebookF, AiOutlineTwitter, ImInstagram } from 'react-icons/all'

export default function Footer() {
    return (

        <>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <h1>
                        pufi
                    </h1>
                </div>
                <div className='footer-containers'>
                    <p>
                        PUFI RAIN
                    </p>
                    <p>
                        PUFI PUFF
                    </p>
                    <p>
                        PUFI CART
                    </p>
                    <p>
                        PUFI NAP
                    </p>
                </div>
                <hr />
                <div className='footer-containers'>
                    <p>
                        CONTACTO
                    </p>
                    <p>
                        AYUDA
                    </p>
                    <p>
                        COMO COMPRAR
                    </p>
                    <p>
                        TERMINOS Y CONDICIONES
                    </p>
                </div>
                <hr />
                <div className='footer-containers'>
                    <p>
                        COMPRAR 100% SEGURA
                    </p>

                </div>
                <hr />
                <div className='footer-containers'>
                    <p>
                        SEGUINOS EN <FaFacebookF /> <AiOutlineTwitter /> <ImInstagram />
                    </p>

                </div>
            </div>
            <div className='container-footer-copyright'>
                <div className='footer-copyright'>
                    <p>PUFI copyright 2017 - Todos los derechos reservados</p>
                </div>
            </div>


        </>
    )
}
