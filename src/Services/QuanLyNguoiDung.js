import { GROUPID } from "../Util/Settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }

    dangKy = (thongTinDangKy) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    }

    layDanhSachNguoiDung = (taiKhoan) => {
        if (taiKhoan.trim() != '') {
            return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`)
        }
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    themNguoiDung = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung)
    }
   
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinNguoiDung)
    }
    layThongTinNguoiDung = (taiKhoan)=>{
        return this.post(`api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,taiKhoan)
    }
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
