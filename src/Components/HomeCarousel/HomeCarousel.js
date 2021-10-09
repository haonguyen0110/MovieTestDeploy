import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCarouseAction } from '../../Redux/actions/CarouselAction';
import './HomeCarousel.css'



export default function HomeCarousel(props) {

  const { arrBanner } = useSelector(state => state.CarouselReducer)
  const dispatch = useDispatch()
  useEffect(() => {


    dispatch(getCarouseAction)
  }, [])


  const renderBanner = () => {

    return arrBanner.map((item, index) => {
      const contentStyle = {
        height: '70vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${item.hinhAnh})`,

      };
      return <div key={index}>
        <div className="w-full" style={contentStyle}>
          <img src={item.hinhAnh} className="w-full h-full" alt={item.hinhAnh} />
        </div>
      </div>
    })
  }
  return (
  
      <Carousel autoplay>
        {renderBanner()}
      </Carousel>
    

  )
}
