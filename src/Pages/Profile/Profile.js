import React from 'react'
import { Redirect } from 'react-router'
import Banner from '../../Components/Banner/Banner'
import { USER_LOGIN } from '../../Util/Settings/config'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinNguoiDungAction } from '../../Redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';

const { TabPane } = Tabs;
export default function Profile() {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(layThongTinNguoiDungAction(profile.taiKhoan))
    }, [])
    const { thongTinDatVe } = useSelector(state => state.QuanLyNguoiDungReducer)
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }
    let profile = JSON.parse(localStorage.getItem(USER_LOGIN))
    
    const renderLichSuDatVe = () => {
        return thongTinDatVe.map((item, index) => {
            return <div className="flex mb-20" key={index}>
                <img src={item.hinhAnh} width={200} alt=".." />
                <div className="ml-5">
                    <p className="text-2xl m-0 mb-2 font-bold text-white">{item.tenPhim}</p>
                    <p className="text-lg text-green-500">Ngày đã đặt: <span className="text-white">{moment(item.ngayDat).format('DD MM YYYY | hh:mm A')}</span>  </p>
                    <p className="text-lg text-green-500">Thời lượng phim: <span className="text-white">{item.thoiLuongPhim} phút</span> </p>
                    <p className="text-lg text-green-500">Hệ thống rạp: <span className="text-white"> {item.danhSachGhe[0].maHeThongRap}</span></p>
                    <p className="text-lg text-green-500">Tên rạp: <span className="text-white">{item.danhSachGhe[0].tenHeThongRap} - {item.danhSachGhe[0].tenCumRap}</span> </p>
                    <p className="text-lg text-red-500 font-bold">Số ghế: {item.danhSachGhe.map((ghe, index) => {
                        return <span className="ml-5 text-white" key={index}>[{ghe.tenGhe}]</span>
                    })}</p>
                </div>
                <hr />
            </div>
        })

    }
    return (
        <div>
            <div >
                <Banner />

            </div>
            <div className=" px-5 py-24 mx-auto rapChieu">
                <div className="container">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab={<span className="text-white btn__movie movie__active hover:shadow-2xl">Thông tin cá nhân</span>} key="1">
                            <div>
                                <h1 className="text-center text-4xl font-bold text-green-500 mb-10">THÔNG TIN CÁ NHÂN</h1>
                                <div style={{position:'relative'}} className="px-10 w-full">
                                    <table className="min-w-full divde-y divide-gray-200 ">
                                        <tr style={{ height: '50px' }}>
                                            <td className="text-lg text-green-500 font-bold">Tài Khoản</td>
                                            <td className="text-white text-lg pl-20">{profile.taiKhoan}</td>
                                        </tr>
                                        <tr style={{ height: '50px' }}>
                                            <td className="text-lg mt-5 text-green-500 font-bold">Họ và tên</td>
                                            <td className="text-white text-lg  pl-20">{profile.hoTen}</td>
                                        </tr>
                                        <tr style={{ height: '50px' }}>
                                            <td className="text-lg mt-5 text-green-500 font-bold">Email</td>
                                            <td className="text-white text-lg  pl-20">{profile.email}</td>
                                        </tr>
                                        <tr style={{ height: '50px' }}>
                                            <td className="text-lg mt-5 text-green-500 font-bold">Số điện thoại</td>
                                            <td className="text-white text-lg  pl-20">{profile.soDT}</td>
                                        </tr>
                                        <tr style={{ height: '100px' }}>
                                            <td></td>
                                            <td> </td>
                                        </tr>
                                    </table>
                                    <NavLink to="/profile/edit" style={{right:'0',bottom:'0', position:'absolute'}} className="btn__movie movie__active hover:shadow-2xl hover:text-white text-white">Cập nhật</NavLink>
                                </div>



                            </div>


                        </TabPane>
                        <TabPane tab={<span className="text-white btn__movie movie__active hover:shadow-2xl">Lịch sử đặt vé</span>} key="2">
                            <div>
                                <h1 className="text-center text-4xl font-bold text-green-500 mb-10">DANH SÁCH VÉ ĐÃ ĐẶT</h1>

                                {renderLichSuDatVe()}

                            </div>
                        </TabPane>

                    </Tabs>
                </div>

            </div>
        </div>
    )
}
