import React from 'react'

export default function Title(props) {

    const {oneTitle, secondTitle , thirdTitle} = props;

    return (
        <div className='container-title'>
            <p className='one-title'>{oneTitle}</p>
            <h1 className='second-title'> {secondTitle} </h1>
            <p className='third-title'> {thirdTitle} </p>
        </div>
    )
}
