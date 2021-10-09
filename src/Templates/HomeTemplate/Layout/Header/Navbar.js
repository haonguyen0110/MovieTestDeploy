import _ from 'lodash'
import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { TOKEN, USER_LOGIN } from '../../../../Util/Settings/config'

export default function Navbar() {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="lg:py-2 lg:px-2 md:py-1 md:px-1 font-medium btn__movie movie__active transform hover:shadow-2xl transition duration-300">Đăng nhập

                </button>
                <button onClick={() => {
                    history.push('/register')
                }}
                    className="lg:py-2 lg:px-2 md:py-1 md:px-1 font-medium  btn__movie movie__active  transform hover:shadow-2xl  transition duration-300">Đăng ký

                </button>
            </Fragment>
        } else {
            return <Fragment>
                <div className="lg:flex md:block sm:block" style={{ alignItems: 'center' }}>
                    <div>

                        <NavLink to="/profile" className="text-white mr-4  lg:text-xl md:text-lg">Wellcome <span className="text-green-500">{userLogin.taiKhoan}</span> </NavLink>
                    </div>
                    <div className="lg:mt-0 md:mt-5 sm:mt-5 ">
                        <NavLink to="/profile" className="text-white mt-5 ml-5 lg:text-xl md:text-lg cursor-pointer btn__movie movie__active hover:shadow-2xl hover:text-white " >Thông Tin</NavLink>
                        <NavLink to="/home" className="text-white mt-5 ml-5 text-xl cursor-pointer btn__movie movie__active hover:shadow-2xl hover:text-white " onClick={() => {

                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(TOKEN);
                            window.location.reload()
                        }}>Đăng xuất</NavLink>
                    </div>

                </div>

            </Fragment>
        }
    }
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");


    return (
        <Fragment>

            <nav className="text-white fixed z-10 w-full bg-blue-900 bg-opacity-80 shadow-lg py-3">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between ">
                        <div className="flex space-x-7">

                            {/* Primary Navbar items */}
                            <div className="hidden md:flex items-center space-x-1">
                                <NavLink to="/home" className="py-4 px-2 text-white lg:text-lg md:text-md  hover:text-green-200 " activeClassName="font-bold text-green-400">Trang chủ</NavLink>
                                <a href="#" className="py-4 px-2 text-white lg:text-lg md:text-md hover:text-green-200" activeClassName="font-bold text-green-400">Phim</a>
                                <a href="#" className="py-4 px-2 text-white lg:text-lg md:text-md hover:text-green-200" activeClassName="font-bold text-green-400">Tin tức</a>
                                <a href="#" className=" py-4 px-2 text-white lg:text-lg md:text-md hover:text-green-200" activeClassName="font-bold text-green-400">Liên hệ</a>
                            </div>
                        </div>
                        <div>
                            {/* Website Logo */}
                            <a href="/home" className="flex items-center py-4 px-2">
                                <img src="https://cdn1.iconfinder.com/data/icons/social-media-hexagon-1/1024/tinder-hex-512.png" alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-semibold text-green-600 text-2xl">FireMovie</span>
                            </a>
                        </div>
                        {/* Secondary Navbar items */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            {renderLogin()}
                        </div>
                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => {
                                menu.classList.toggle("hidden");
                            }} className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 " x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className="hidden  mobile-menu lg:hidden ">
                    <ul className>

                        <li> <NavLink to="/home" className="block text-sm px-2 py-4 text-white  hover:text-green-200 " activeClassName="font-bold text-green-200">Trang chủ</NavLink></li>
                        <li> <NavLink to="/movie" className="block text-sm px-2 py-4 text-white hover:text-green-200" activeClassName="font-bold text-green-200">Phim</NavLink></li>
                        <li> <NavLink to="/news" className="block text-sm px-2 py-4 text-white hover:text-green-200" activeClassName="font-bold text-green-200">Tin tức</NavLink></li>
                        <li><NavLink to="/contact" className=" block text-sm px-2 py-4 text-white hover:text-green-200" activeClassName="font-bold text-green-200">Liên hệ</NavLink></li>
                        <li>{renderLogin()}</li>


                    </ul>
                </div>
            </nav>



        </Fragment>
    )
}
