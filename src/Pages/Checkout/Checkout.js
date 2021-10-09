import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../Redux/actions/QuanLyDatVeAction'
import { UserOutlined } from '@ant-design/icons'
import './CheckoutStyle.css'
import { DAT_VE } from '../../Redux/actions/types/QuanLyDatVeType'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/Models/ThongTinDatVe'
import { Tabs } from 'antd';


const { TabPane } = Tabs;

function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { chiTietPhongVe, dsGheDangDat} = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch();
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe


    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            let gheVip = ghe.loaiGhe === "Vip" ? 'vip' : '';
            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let gheDangDat = ""
            let indexGheDD = dsGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            
            if (indexGheDD !== -1) {
                gheDangDat = "gheDangDat"
            }
            return <Fragment>
                <button onClick={() => {


                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat } className={`ghe shadow-inner  ${gheDaDat} ${gheDangDat}  ${gheVip} `} key={index}>

                    {(ghe.daDat) ? <UserOutlined /> : ghe.stt}

                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>

        })
    }



    useEffect(() => {

        const action = layChiTietPhongVeAction(props.match.params.id)

        dispatch(action)
    },[])

   

 console.log(dsGheDangDat)

    return (
        <div className=" mt-5 mx-5" style={{ minHeight: '100vh' }}>
            <div className="flex justify-around ">
                <div className=" ">
                    <table className="min-w-full divde-y divide-gray-200 text-center">
                        <thead className="bg-gray-80">
                            <tr className="text-white">
                                <th>Ghế chưa đặt</th>
                                <th>Ghế đang đặt</th>
                                <th>Ghế đã được đặt</th>
                                <th>Ghế VIP</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button className="ghe"></button>
                                </td>
                                <td>
                                    <button className="ghe gheDangDat"></button>
                                </td>
                                <td>
                                    <button className="ghe gheDaDat"><UserOutlined /> </button>
                                </td>
                                <td>
                                    <button className="ghe vip"></button>
                                </td>
                               

                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt=".." />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div >
                            {renderGhe()}
                        </div>
                    </div>

                </div>
                <div className=" shadow-2xl px-5 py-5">
                    <h1 className="text-5xl text-green-600 text-center">
                        {dsGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe
                        }, 0).toLocaleString()}<sup>đ</sup>
                    </h1>
                    <hr />
                    <div className="my-2">
                        <h3 className="text-xl text-green-600">{thongTinPhim?.tenPhim}</h3>
                        <p className="font-bold text-white">{thongTinPhim?.tenCumRap}</p>
                        <p className="text-white">{thongTinPhim?.diaChi}</p>
                        <p><span className="text-green-600 font-bold mr-3">Ngày chiếu:</span><span className="text-white">{thongTinPhim?.ngayChieu}</span> </p>
                    </div>

                    <hr />
                    <div className="my-5 w-4/5" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="w-full">
                            <span className="text-red-500 font-bold text-lg mr-3">Ghế</span>

                            {_.sortBy(dsGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span className="mr-2 p-1  text-lg text-white" key={index}>[{gheDD.stt}]</span>


                            })}
                        </div>


                    </div>
                    <hr />
                    <div className="my-2">
                        <p className="text-green-600 font-bold">Email:</p>
                       <span className="text-white">{userLogin.email}</span> 
                    </div>
                    <hr />
                    <div className="my-2">
                        <p className="text-green-600 font-bold">Phone:</p>
                       <span className="text-white">{userLogin.soDT}</span> 
                    </div>
                    <hr />
                    <div className="" style={{ marginTop: '10vh' }}>
                        <div onClick={() => {
                            if(dsGheDangDat.length === 0){
                                alert("Vui lòng chọn ghế !")
                            }else{
                                const thongTinDatVe = new ThongTinDatVe();
                                thongTinDatVe.maLichChieu = props.match.params.id;
                                thongTinDatVe.danhSachVe = dsGheDangDat;
                                dispatch(datVeAction(thongTinDatVe))
                            }
                           
                        }} className="btn__movie movie__active text-white w-full text-center py-3 rounded-3xl font-bold text-2xl" style={{ cursor: 'pointer' }}>Đặt vé</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const KetQuaDatVe = (props) => {
    const { chiTietPhongVe, dsHoanTat } = useSelector(state => state.QuanLyDatVeReducer);
  
    return <div className="mt-5 " style={{height:'100vh'}}>
        <h1 className="text-center text-4xl text-white">Cảm ơn bạn đã tin dùng dịch vụ của chúng tôi!</h1>
        <section className="text-gray-600 body-font flex items-center justify-center">
            <div className="container ml-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center">
                <div className="mr-10" >
                    <img className="object-cover object-center  rounded" style={{width:'350px',height:'450px'}}  alt="hero" src={`${chiTietPhongVe.thongTinPhim.hinhAnh}`} />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{`${chiTietPhongVe.thongTinPhim.tenPhim}`}
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 text-xl font-bold text-green-600 leading-relaxed">Tên rạp: {`${chiTietPhongVe.thongTinPhim.tenCumRap}`}</p>
                    <p className="mb-8 text-xl font-bold text-green-600 leading-relaxed">Ngày chiếu: <span className="text-white"> {`${chiTietPhongVe.thongTinPhim.ngayChieu}`}</span></p>
                    <p className="mb-8 text-xl font-bold text-green-600 leading-relaxed">Giờ chiếu: <span className="text-white"> {`${chiTietPhongVe.thongTinPhim.gioChieu}`}</span></p>
                    <p className="mb-8 text-xl font-bold text-green-600 leading-relaxed">{`${chiTietPhongVe.thongTinPhim.tenRap}`}</p>
                    <p className="mb-8 text-xl font-bold text-green-600 leading-relaxed">Số ghế đã đặt:
                        {_.sortBy(dsHoanTat, ['stt']).map((gheDD, index) => {
                            return <span className="ml-2 p-1 text-white text-lg" key={index}>[{gheDD.stt}]</span>


                        })} </p>


                    <div className="flex ml-auto mr-auto">

                        <a href="/home" className="ml-4 inline-flex 0 font-bold btn__movie movie__active text-white focus:outline-none hover:text-white hover:shadow-2xl rounded-xl text-lg">Trờ lại trang chủ</a>
                    </div>
                </div>
            </div>
        </section>


    </div>
}

export default function CheckoutTab(props) {
    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    return <div className="p-5 rapChieu" >
        <Tabs defaultActiveKey='1' activeKey={tabActive} centered>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe {...props}  />
            </TabPane>

        </Tabs>
    </div>

}



