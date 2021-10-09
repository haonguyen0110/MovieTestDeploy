import React from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css'

import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE_DANG_CHIEU, SET_MOVIE_SAP_CHIEU } from "../../../Redux/actions/types/getMovieType";
import MoiveCard from "../../../Components/Movie/MoiveCard";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", right:'5px' }}
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



const MovieList = (props) => {
    const dispatch = useDispatch();
    const { dangChieu, sapChieu } = useSelector(state => state.MovieReducer)



    const renderMoive = () => {

        return props.arrMovie.slice(0, 12).map((item, index) => {
            return <div key={index}>

                <MoiveCard movie={item} />
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
        autoplay: false,
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


    let activeClassDC = dangChieu === true ? 'movie__active' : ''
    let activeClassSC = sapChieu === true ? 'movie__active' : ''

    return (
        <div className=" w-full movie__list">
            <div className="movie__header flex justify-between">
                <div className="movie__left text-white">

                    <p className="text-4xl font-bold m-0 mb-2">Phim</p>
                    <p>Chắc chắn rằng bạn không bỏ lỡ những phim trong ngày </p>
                </div>
                <div className="movie__right text-white">
                    <button className={`btn__movie hover:shadow-2xl ${activeClassDC} `} onClick={() => {
                        const action = { type: SET_MOVIE_DANG_CHIEU }
                        dispatch(action);
                    }}>ĐANG CHIẾU</button>
                    <button className={`btn__movie hover:shadow-2xl ${activeClassSC}`} onClick={() => {
                        const action = { type: SET_MOVIE_SAP_CHIEU }
                        dispatch(action);
                    }}>SẮP CHIẾU</button>
                </div>
            </div>
            <div className="mt-10">
                <Slider {...settings}>
                    {renderMoive()}
                </Slider>
            </div>


           


        </div>

    );
}


export default MovieList;