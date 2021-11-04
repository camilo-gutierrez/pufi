import React, {useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {bannersData} from '../../../redux/actions/bannerAction'
import '../../../sass/index.scss';
import { API_URL } from '../../../utils/constants';
import Button from '../../atoms/button/Button';
import TitleBanner from '../../atoms/titleBanner/TitleBanner';
import Header from '../../molecules/header/Header';

function Banner() {

  const dispatch = useDispatch()

  const images = useSelector(state => state.banners.data)

  useEffect(() => {
    (() => {
        dispatch(bannersData());
    })()
 }, [])
  
   const mainContainer = useRef(null); 
  
  const circles = Array(images && images.length).fill(0).map(x => ({isSelected:false}));
   const [circleState,setCircleState] = useState(circles);
  function handleCircleClick(index){    
    const cloned = [...circleState].map((x)=>({...x,isSelected:false}));
    cloned[index].isSelected = !cloned[index].isSelected;
    setCircleState(cloned);
    mainContainer.current.scrollLeft = mainContainer.current.offsetWidth * index;
  } 
  return (
    <>
      <div className="main-content">
         <Header/>
          <div className="background-image" ref={mainContainer}>
          {images && images.map((img)=>(
            <img src={`${API_URL}${img.Main_image.url}`} alt="" key={img.id} />
          ))}
            <TitleBanner />
         <Button />
        </div> 
          <div className="nav-circles">
            {circleState && circleState.map((circle,index)=>(
              <>
              <span className={`circle ${circle.isSelected ? 'circle-selected' : ''}`} onClick={() => handleCircleClick(index)}></span>
              </>
            ))}
            
          </div> 
      </div>
    </>
  );
}

export default Banner;
