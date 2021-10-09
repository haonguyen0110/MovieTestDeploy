import React from 'react'
import { useFormik } from 'formik';
import { useDispatch} from 'react-redux';
import { dangKyAction } from '../../Redux/actions/QuanLyNguoiDungAction';
export default function Register(props) {
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            hoTen: ""
        },
        onSubmit: values => {

            const action = dangKyAction(values);
            dispatch(action);

       

        },
    });


    return (
        <div className="container " >
            <div className="flex justify-center register ">
                <div className="w-full max-w-md p-8  rounded-xl">
                    <h1 className="text-4xl font-bold text-center text-green-600">Đăng ký</h1>
                    <form onSubmit={
                        formik.handleSubmit} noValidate action className="space-y-6 text-black-400 ng-untouched ng-pristine ng-valid">

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-green-600 font-bold text-xl">Họ và tên</label>
                            <input onChange={formik.handleChange} required type="text" name="hoTen" id="hoTen" placeholder="Vui lòng nhập họ tên" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-green-600 font-bold text-xl">Tài khoản</label>
                            <input onChange={formik.handleChange}  required  type="text" name="taiKhoan" id="username" placeholder="Vui lòng nhập tên đăng nhập" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-green-600 font-bold text-xl">Email</label>
                            <input onChange={formik.handleChange}  required  type="email" name="email" id="email" placeholder="Vui lòng nhập email" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-green-600 font-bold text-xl">Mật khẩu</label>
                            <input onChange={formik.handleChange}  required  type="password" name="matKhau" id="password" placeholder="Vui lòng nhập mật khẩu" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-green-600 font-bold text-xl">Số điện thoại</label>
                            <input onChange={formik.handleChange}  required  type="number" name="soDt" id="soDt" placeholder="Vui lòng nhập số điện thoại" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                        </div>


                        <button className="block w-full p-3 text-center btn__movie movie__active text-white">Đăng ký</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
