import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { cardsData } from '../../../redux/actions/cardsAction'
import { API_URL } from '../../../utils/constants'

function Cards() {

    const dispatch = useDispatch()

    const listaImagenes = useSelector(state => state.cards.data)

    console.log('Cards', listaImagenes);

    useEffect(() => {
        (() => {
            dispatch(cardsData());
        })()
     }, [])


    return (
        <>
            <div className="content">
                {listaImagenes && listaImagenes.map((item) => {
                    const isPair = item.Slug % 2 == 0;
                    return (
                        <div className={`content-child  ${isPair ? '' : 'reversed'}`}>
                            <div className="content__img">
                                    <img src={`${API_URL}${item.Background.url}`} alt="" />
                            </div>
                            <div className={`content__card ${isPair ? 'triangle-left' : 'triangle-right'}`}>
                                <img src={`${API_URL}${item.Logo.url}`} alt="" />
                                <h4>{item.Title}</h4>
                                <hr />
                                <p>{item.Description}</p>
                                <br />
                                <p key={item.Slug}> {' > '}{`ver mas`}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    );
}

export default Cards