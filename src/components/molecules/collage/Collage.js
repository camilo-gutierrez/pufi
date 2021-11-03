import React from 'react'

export default function Collage() {
    const listaImagenes = [
        {
            id: 1,
            title:'Pufi Ran',
            logo:'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc:'descripcion del producto. Este es un texto simulado',
            background:'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer:'Ver Mas'
        },
        {
            id: 2,
            title:'Pufi Puff',
            logo:'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc:'descripcion del producto. Este es un texto simulado',
            background:'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer:'Ver Mas'
        },
        {
            id: 3,
            title:'Pufi Ran',
            logo:'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc:'descripcion del producto. Este es un texto simulado',
            background:'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer:'Ver Mas'
        },
        {
            id: 4,
            title:'Pufi Puff',
            logo:'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc:'descripcion del producto. Este es un texto simulado',
            background:'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer:'Ver Mas'
        },
        {
            id: 5,
            title:'Pufi Puff',
            logo:'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc:'descripcion del producto. Este es un texto simulado',
            background:'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer:'Ver Mas'
        },
        {
            id: 6,
            title:'Pufi Puff',
            logo:'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc:'descripcion del producto. Este es un texto simulado',
            background:'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer:'Ver Mas'
        },

    ];
    return (

        <div className='container-gallery'>
        <div className='gallery'>
            {listaImagenes && listaImagenes.map((item) => {
              return (
                  <div className='picture' key={item.id}>
                   <img src={item.logo} alt="" sizes={25} />
                  </div>
              ) 
            })}
        </div>
        </div>
    )
}
