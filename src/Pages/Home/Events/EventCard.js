import React from 'react'
import '../../../Components/Movie/MovieCard.css'

export default function EventCard(props) {
     const { event } = props;

     return (

          

               <div id="newIn" className="mr-10 ">

                    <div className="newIn__img">
                         <img src={event.hinhAnh} style={{ width: '100%', height: 300 }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} alt="..." />
                         <div className="overlay" />
                         <div className="newIn__play">
                              <div>
                                   <div  className=" btn__movie movie__active text-white border-0 cursor-pointer hover:shadow-2xl">ĐẶT VÉ</div>
                              </div>

                         </div>
                    </div>
                    <div className="newIn__text  ">
                         <h3 className="text-lg text-white">{event.tenSuKien}</h3>

                    </div>

               </div>
        



     )
}
