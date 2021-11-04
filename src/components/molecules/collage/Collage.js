import React, {useEffect, useState} from 'react'
import { useSelector,  useDispatch } from 'react-redux';
import { collageData } from '../../../redux/actions/collageAction';
import { API_URL } from '../../../utils/constants';

export default function Collage() {
    

    const dispatch = useDispatch()

    const listaImagenes = useSelector(state => state.collage.data)

    console.log('collage',listaImagenes);

    useEffect(() => {
        (() => {
            dispatch(collageData());
        })()
     }, [])

    return (

        <div className='container-gallery'>
        <div className='gallery'>
            {listaImagenes && listaImagenes.map((item) => {
              return (
                  <div className='picture' key={item.Slug}>
                    <img src={`${API_URL}${item.Background.url}`} alt="" sizes={25} /> 
                  </div>
              ) 
            })}
        </div>
        </div>

    )
}
