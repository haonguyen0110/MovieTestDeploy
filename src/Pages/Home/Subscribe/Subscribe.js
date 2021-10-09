import React from 'react'
import './Subscribe.css'
export default function Subscribe() {
    return (
        <div>
            <div className="sub flex justify-center text-center">
            <div className="sub__content">
                <h3 className="text-green-300  font-bold lg:text-3xl sm:text-2xl ">ĐĂNG KÝ FIREMOVIE</h3>
                <h1 className=" text-white font-bold lg:text-4xl sm:text-3xl ">ĐỂ NHẬN NHIỀU ƯU ĐÃI ĐẶC BIỆT</h1>
                <div>
                    <input type="text" className="sub__input text-lg rounded-xl focus:text-white" placeholder="Nhập địa chỉ email "/>
                    <button className="btn__movie movie__active text-white">Đăng ký</button>
                </div>
            </div>
            </div>
        </div>
    )
}
