import { TOKEN, USER_LOGIN } from "../../Util/Settings/config";
import { DANG_KY, DANG_NHAP, LAY_DANH_SACH_NGUOI_DUNG, LAY_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDung"


let user ={};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    dangNhap:false,
    dsNguoiDung:[],
    thongTinDatVe:[]
}

export const QuanLyNguoiDungReducer = (state=stateDefault,action)=>{
    switch (action.type){
        case DANG_NHAP:{
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state,userLogin:thongTinDangNhap}
        }
        case LAY_DANH_SACH_NGUOI_DUNG:{
            state.dsNguoiDung=action.dsNguoiDung
            return {...state}
        }
        case LAY_THONG_TIN_NGUOI_DUNG:{
            state.thongTinDatVe=action.thongTinDatVe
            return {...state}
        }
        default: return {...state}
    }
}