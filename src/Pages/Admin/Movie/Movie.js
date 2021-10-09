import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { Input } from 'antd';
import { EditOutlined, DeleteOutlined,CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction, xoaPhimAction } from '../../../Redux/actions/getMovieAction';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const { Search } = Input;




export default function Movie() {

    const { arrMovieDefault } = useSelector(state => state.MovieReducer);

    const dispatch = useDispatch();





    useEffect(() => {
        dispatch(getMovieAction())
    }, [])

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend'],
            // sortOrder:'descend'
            width: '10%'
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            defaultSortOrder: 'descend',
            width: '40%'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            width: '25%',
            render: (text, movie) => {
                return <Fragment>
                    <img onError={e => { e.target.onerror = null; e.target.src = `https://picsum.photos/80`; }} src={movie.hinhAnh} width={80} height={80} alt=".." />
                </Fragment>
            }
        }, {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            width: '25%',
            render: (text, movie) => {
                return <Fragment>
                    <NavLink className="text-blue-500 text-xl" to={`/admin/movie/edit/${movie.maPhim}`}><EditOutlined /></NavLink>
                    <span className=" text-red-500 text-xl ml-4 cursor-pointer" onClick={() => {
                        if (window.confirm('Bạn có chắc chắn muốn xóa phim ' + movie.tenPhim)) {
                            dispatch(xoaPhimAction(movie.maPhim))
                        }
                    }} ><DeleteOutlined /></span>
                    <NavLink className="text-blue-500 text-xl ml-4" to={`/admin/movie/showtimes/${movie.maPhim}/${movie.tenPhim}`}><CalendarOutlined /></NavLink>
                </Fragment>
            }
        },
    ];
    const onSearch = value => {
        
        dispatch(getMovieAction(value))
        console.log(value)
    };
    const data = arrMovieDefault

    return (
        <div className="container">
            <h3 className="text-2xl font-bold">Quản lý phim</h3>
         
            <Search
                className="mb-5"
                placeholder="Tìm kiếm phim"
                enterButton="Tìm kiếm"
                size="large"

                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} rowKey={"maPhim"} />
        </div>
    )
}
