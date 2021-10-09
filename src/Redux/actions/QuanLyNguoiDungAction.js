import { Redirect } from "react-router";
import { history } from "../../App";
import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDung"
import { DANG_KY, DANG_NHAP, LAY_DANH_SACH_NGUOI_DUNG, LAY_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDung";

export const dangNhapAction = (thongTinDangNhap) => {


    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP,
                    thongTinDangNhap: result.data.content
                });
                history.push('/home');
            }

        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)
        }
    }
}
export const dangKyAction = (thongTinDangKy) => {


    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
            console.log('ketqua', result)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_KY,
                    thongTinDangNhap: result.data.content
                });
                history.push('/login');
            }

        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)
        }
    }
}


export const layDanhSachNguoiDungAction = (taiKhoan = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(taiKhoan);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DANH_SACH_NGUOI_DUNG,
                    dsNguoiDung: result.data.content
                });

            }

        } catch (error) {
            console.log(error.response?.data)

        }
    }
}


export const themNguoiDungAction = (thongtinNguoiDung) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.themNguoiDung(thongtinNguoiDung);
            alert('Thêm người dùng thành công!')
            console.log(result)
        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)
        }
    }
}



export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
            console.log('xoa', result)
            alert('Xóa người dùng thành công')
            dispatch(layDanhSachNguoiDungAction())
        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)
        }
    }
}

export const capNhatThongTinNguoiDungAction = (thongtinNguoiDung) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongtinNguoiDung);
            console.log('result', result)
            alert('Cập nhật thông tin thành công')
            if (result.data.statusCode === 200) {
                
                history.push('/');
            }

        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)

        }
    }
}

export const layThongTinNguoiDungAction = (taiKhoan) =>{
    return async (dispatch)=>{
        try {
            let result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_THONG_TIN_NGUOI_DUNG,
                    thongTinDatVe: result.data.content.thongTinDatVe
                });

            }
          

        } catch (error) {
            console.log(error.response?.data)
        }
    }
}