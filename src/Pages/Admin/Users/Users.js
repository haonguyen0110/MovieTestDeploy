import React, { useEffect } from 'react'
import { Table, Tag} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../Redux/actions/QuanLyNguoiDungAction';

import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function Users() {
  
    const dispatch = useDispatch()
    const { dsNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log(dsNguoiDung)
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction())
    }, [])
    

    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            key: 'soDt',
        },
        {
            title: 'Loại người dùng',
            key: 'maLoaiNguoiDung',
            dataIndex: 'maLoaiNguoiDung',
            render: text => {
                let color = text ==='KhachHang' ? 'green' : 'volcano'
                let textRender=text
                if(text==='QuanTri'){
                    textRender= 'Quản trị'
                }else{
                    textRender='Khách hàng'
                }
                return <Tag color = {color}>{textRender}</Tag>
            }
              
      
        },



        {
            title: 'Hành động',
            key: 'taiKhoan',
            render:    (text, nguoiDung) => {
                return <Fragment>
                    <NavLink className="text-blue-500 text-xl" to={`/admin/users/edituser`}><EditOutlined /></NavLink>
                    <span className=" text-red-500 text-xl ml-4 cursor-pointer" onClick={() => {
                        if (window.confirm('Bạn có chắc chắn muốn người dùng ' + nguoiDung.taiKhoan)) {
                            dispatch(xoaNguoiDungAction(nguoiDung.taiKhoan))
                        }
                    }} ><DeleteOutlined /></span>
                    
                </Fragment>
            }
        },
    ];

    const { Search } = Input;
    const onSearch = value => {
        console.log(value)
        dispatch(layDanhSachNguoiDungAction(value))
      
    };
    const data = dsNguoiDung
    return (
        <div>
            <h1 className="text-2xl mb-5">Danh sách người dùng</h1>
            <Search
                className="mb-5"
                placeholder="Nhập tên người dùng"
                enterButton="Tìm kiếm"
                size="large"

                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} />

        </div>
    )
}
