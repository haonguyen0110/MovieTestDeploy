import React, { useEffect} from 'react'
import './styles/circle.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { Tabs, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { layThongTinChiTietPhim } from '../../Redux/actions/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import MovieModal from '../../Components/Movie/MovieModal';
import '../../Components/Movie/MovieCard.css'
const { TabPane } = Tabs;
export default function Detail(props) {


    const MovieDetail = useSelector(state => state.MovieReducer.MovieDetail)
    console.log('chitietphim', MovieDetail)
    const dispatch = useDispatch();


    useEffect(() => {

        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))
    }, [])



    return (
        <div style={{ backgroundImage: `url(${MovieDetail.hinhAnh}),url('https://picsum.photos/2000')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <CustomCard
                style={{ paddingTop: '150px', minHeight: '100vh' }}
                effectColor="ffff"
                color="#14AEFF"
                blur={8}
                borderRadius={0}
            >
                <div className=" container flex ">
                    <div>
                        <div className style={{ display: 'flex', alignItems: 'center' }}>
                     
                                <div className="newIn__img " style={{width:'400px'}} >
                                    <img src={MovieDetail.hinhAnh} style={{width:'300px',height:'380px'}} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/380'; }} alt="..." />
                                    <div className="overlay" />
                                    <div className="newIn__play">
                                        <div>
                                            <MovieModal movie={MovieDetail} />
                                            <p className="text-xl font-bold text-center">Xem trailer</p>
                                           
                                        </div>

                                    </div>
                                </div>
                   

                            {/* <img src={MovieDetail.hinhAnh} style={{ width: '350px', height: '380px' }} alt=".." onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/350/380'; }} /> */}
                            <div className="ml-5 w-full">
                                <p className="text-white text-sm">Ngày chiếu: {moment(MovieDetail.ngayKhoiChieu).format('DD/MM/yyyy')}</p>
                                <h1 className="font-bold mid_color text-2xl text-green-500">{MovieDetail.tenPhim}</h1>
                                <p className="text-white">{MovieDetail.moTa}</p>
                            </div>
                        </div>
                    </div>

                    <div className="ml-16 my-auto lg:block  sm:hidden"  >
                        <h1 style={{ marginLeft: '10%', color: '#dd9d22', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                        <h1 className="text-yellow-400 text-2xl"><Rate allowHalf value={MovieDetail.danhGia / 2} style={{ color: '#dd9d22', fontSize: 30 }} /></h1>
                        <div className={`c100 p${MovieDetail.danhGia * 10} big  orange`}>
                            <span>{MovieDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 container ml-72 w-2/3 bg-white   px-5 py-5" >
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Lịch chiếu" key="1">
                            <div className="mt-5">
                                <Tabs tabPosition={'left'}>

                                    {MovieDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane tab={<div><img width={50} src={htr.logo} alt="..." /></div>} key={index}>
                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                return <div key={index} className="mb-5">
                                                    <div className="flex " style={{ alignItems: 'center' }}>
                                                        <img width={60} src={htr.logo} alt="..." />
                                                        <div className="ml-3">
                                                            <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1, marginBottom: 5 }}> {cumRap.tenCumRap}</p>
                                                            <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.tenCumRap}</p>

                                                        </div>
                                                    </div>
                                                    <div className=" ml-20">
                                                        {cumRap.lichChieuPhim?.slice(0, 3).map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className=" w-1/2 my-1 font-bold text-lg  mx-auto btn__movie movie__active text-white  text-center rounded-lg py-1 px-1 hover:text-white hover:shadow-2xl" key={index}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('HH:MM')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            })}
                                        </TabPane>
                                    })}


                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2">
                            <h1 className="text-xl mid_color">{MovieDetail.tenPhim}</h1>
                            <p>{MovieDetail.moTa}</p>
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>



                </div>

            </CustomCard>


        </div>
    )
}
