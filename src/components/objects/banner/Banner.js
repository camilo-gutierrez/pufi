import React from 'react';
import '../../../sass/index.scss';
import Button from '../../atoms/button/Button';
import TitleBanner from '../../atoms/titleBanner/TitleBanner';
import Header from '../../molecules/header/Header';

function Banner() {
  return (
    <>
      <div className="main-content">
         <Header/>
         <div className="background-image">
          <img src="https://cdn.pixabay.com/photo/2014/04/26/04/25/woman-332278_960_720.jpg" alt="" />
            <TitleBanner />
         <Button />
        </div> 
          <div className="nav-circles">
            <span className="circle circle-selected"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
      </div>
    </>
  );
}

export default Banner;
