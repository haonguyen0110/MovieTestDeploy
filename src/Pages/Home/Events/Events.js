import React, { useState } from 'react'
import Slider from "react-slick";
import MoiveCard from '../../../Components/Movie/MoiveCard';
import styleSlick from '../MovieList/MultipleRowSlick.module.css'
import EventCard from './EventCard';
export default function Events(props) {
    const arrEvent = [
        {
            "tenSuKien": 'Đại Hội Âm Nhạc 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event01.jpg'
        },
        {
            "tenSuKien": 'Cánh Diều Vàng 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event02.jpg'
        },
        {
            "tenSuKien": 'Giọng Hát Việt 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event03.jpg'
        },
        {
            "tenSuKien": 'Vietnam Next Top Model 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event04.jpg'
        },
        {
            "tenSuKien": 'Cánh Diều Vàng 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event02.jpg'
        },
        {
            "tenSuKien": 'Đại hội âm nhạc 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event02.jpg'
        },
        {
            "tenSuKien": 'Vietnam Next Top Model 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event04.jpg'
        },
        {
            "tenSuKien": 'Giọng Hát Việt 2021',
            "hinhAnh": 'http://pixner.net/boleto/demo/assets/images/event/event03.jpg'
        },

    ]
    const [dangRa,setDangRa] = useState(true)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-prev']}`}
                style={{ ...style, display: "block",right:'5px' }}
                onClick={onClick}
            >
            </div>

        );
    }



    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-prev']}`}

                style={{ ...style, display: "block", left: '-60px' }}
                onClick={onClick}
            >
            </div>
        );
    }

    const renderEvent = () => {
        return arrEvent.map((item, index) => {
            return <div key={index}>
                <EventCard event={item} />
            </div>
        })
    }


    const settings = {


        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

  
    let activeDang = dangRa === true ? 'movie__active' : ''
    let activeSap = dangRa === false ? 'movie__active' : ''

    return (
        <div className=" w-full movie__list">
            <div className="movie__header flex justify-between">
                <div className="movie__left text-white">

                    <p className="text-4xl font-bold m-0 mb-2">Sự kiện</p>
                    <p>Đừng bỏ lỡ những sự kiện điện ảnh sẽ diễn ra </p>
                </div>
                <div className="movie__right text-white">
                    <button className={`btn__movie hover:shadow-2xl ${activeDang} `} onClick={() => {
                        setDangRa(true)
                    }}>ĐANG DIỄN RA</button>
                    <button className={`btn__movie hover:shadow-2xl ${activeSap} `} onClick={() => {
                       setDangRa(false)
                  
                    }}>SẮP DIỄN RA</button>
                </div>
            </div>
            <div className="mt-10">
                <Slider {...settings}>
                    {renderEvent()}
                </Slider>
            
            </div>





        </div>

    )
}
