import { quanLyDatVeService } from "../../Services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/Models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { DISPLAY_LOADING, HIDE_LOADING } from "./types/LoadingType";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }


        } catch (error) {
            console.log('error', error.response?.data);
            console.log('error', error)
        }
    }
}



export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {

    return async dispatch => {
        try {
            dispatch(displayLoadingAction)


            const result = await quanLyDatVeService.datVe(thongTinDatVe);

            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({ type: DAT_VE_HOAN_TAT })
            await dispatch(hideLoadingAction)
           await dispatch({type:CHUYEN_TAB})
        } catch (error) {
            dispatch(hideLoadingAction)
            console.log('error', error)
        }
    }
}