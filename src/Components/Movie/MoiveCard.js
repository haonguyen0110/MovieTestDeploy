import React from 'react'
import './MovieCard.css'
import { history } from "../../App";
import MovieModal from './MovieModal';
export default function MoiveCard(props) {
    const { movie } = props;
   

    return (
        <div id="newIn" className="mr-10 ">

            <div className="newIn__img">
                <img src={movie.hinhAnh} style={{ width: '100%', height: 300 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} alt="..." />
                <div className="overlay" />
                <div className="newIn__play">
                    <div>
                        <MovieModal movie={movie} />
                        <p className="text-xl font-bold text-center">Xem trailer</p>
                        <div onClick={() => {
                            history.push(`/detail/${movie.maPhim}`);
                        }} className=" btn__movie movie__active text-white border-0 cursor-pointer hover:shadow-2xl">ĐẶT VÉ</div>
                    </div>

                </div>
            </div>
            <div className="newIn__text  ">
                <h3 className="text-lg text-white">{movie.tenPhim}</h3>

            </div>

        </div>



    )
}
