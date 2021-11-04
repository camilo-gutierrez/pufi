import React, { useEffect, useState} from 'react'


function Cards() {


    const listaImagenes = [
        {
            title: 'Pufi RAIN',
            logo: 'https://i1.wp.com/wokii.com/wp-content/uploads/2020/06/max-okhrimenko-dxi9dopufke-unsplash-scaled.jpg?resize=768%2C512&ssl=1',
            desc: 'descripcion del producto. Este es un texto simulado',
            background: 'https://i1.wp.com/wokii.com/wp-content/uploads/2020/06/max-okhrimenko-dxi9dopufke-unsplash-scaled.jpg?resize=768%2C512&ssl=1',
            footer: 'Ver Mas'
        },
        {
            title: 'Pufi PUFF',
            logo: 'https://i1.wp.com/wokii.com/wp-content/uploads/2020/06/max-okhrimenko-dxi9dopufke-unsplash-scaled.jpg?resize=768%2C512&ssl=1',
            desc: 'descripcion del producto. Este es un texto simulado',
            background: 'https://i1.wp.com/wokii.com/wp-content/uploads/2020/06/max-okhrimenko-dxi9dopufke-unsplash-scaled.jpg?resize=768%2C512&ssl=1',
            footer: 'Ver Mas'
        },
        {
            title: 'Pufi CART',
            logo: 'https://i1.wp.com/wokii.com/wp-content/uploads/2020/06/max-okhrimenko-dxi9dopufke-unsplash-scaled.jpg?resize=768%2C512&ssl=1',
            desc: 'descripcion del producto. Este es un texto simulado',
            background: 'https://i1.wp.com/wokii.com/wp-content/uploads/2020/06/max-okhrimenko-dxi9dopufke-unsplash-scaled.jpg?resize=768%2C512&ssl=1',
            footer: 'Ver Mas'
        },
        {
            title: 'Pufi NAP',
            logo: 'https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png',
            desc: 'descripcion del producto. Este es un texto simulado',
            background: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
            footer: 'Ver Mas'
        },

    ];
    return (
        <>
            <div className="content">
                {listaImagenes && listaImagenes.map((item, id) => {
                    const isPair = id % 2 == 0;
                    return (
                        <div className={`content-child  ${isPair ? '' : 'reversed'}`}>
                            <div className="content__img">
                                    <img src={item.background} alt="" />
                            </div>
                            <div className={`content__card ${isPair ? 'triangle-left' : 'triangle-right'}`}>
                                <img src={item.logo} alt="" />
                                <h4>{item.title}</h4>
                                <hr />
                                <p>{item.desc}</p>
                                <br />
                                <p> {' > '}{item.footer}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    );
}

export default Cards