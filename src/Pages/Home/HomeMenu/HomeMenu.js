import React, { useState, Fragment } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './HomeMenu.css'


const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: 'left',
  });
  const { tabPosition } = state
  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((heThongRap, index) => {

      return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width={50} alt=".." />} key={index}>
        <Tabs tabPosition={tabPosition}>
          {heThongRap.lstCumRap?.slice(0, 5).map((cumRap, index) => {
            return <TabPane tab={

              <div style={{ width: '300px', display: 'flex', }}>
                <img src={heThongRap.logo} width={60} alt=".." />
                <div className="text-left ml-3 text-white">
                  {cumRap.tenCumRap}
                  <p className="text-red-200">Chi tiết</p>
                </div>
              </div>
            } key={index}>
              {cumRap.danhSachPhim.slice(0, 3).map((phim, index) => {
                return <Fragment key={index}>
                  <div className="my-5 text-white">
                    <div style={{ display: 'flex' }}>
                      <img src={phim.hinhAnh} width={70} height={70} alt='..' onError={(e) => {
                        e.target.onError = null;
                        e.target.src = "https://picsum.photos/70"
                      }} />

                      <div className="ml-2 ">
                        <h1 className="ml-4 text-white">{phim.tenPhim}</h1>
                        <p>{cumRap.diaChi}</p>
                        <div >
                          {phim.lstLichChieuTheoPhim?.slice(0, 3).map((lichChieu, index) => {

                            return <NavLink  to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                              <button className="btn__movie movie__active px-10 mr-24 text-white hover:shadow-xl hover:text-gray-300">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                              
                            </NavLink>
                          })}
                        </div>

                      </div>

                    </div>
                  </div>

                  <hr></hr>
                </Fragment>

              })}


            </TabPane>
          })}
        </Tabs>

      </TabPane>
    })
  }
  return (
    <Fragment>
      <div className="px-10 py-10 rounded-lg  border-4 rap__section ">
        <div className="bg-opacity-80 bg-blue-900 px-5 py-11 ">
          <Tabs tabPosition={tabPosition} >
            {renderHeThongRap()}
          </Tabs>
        </div>

      </div>
    </Fragment>
  )
}
