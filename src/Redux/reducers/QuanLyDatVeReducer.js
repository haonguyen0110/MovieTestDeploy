import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatVeType"

const stateDefault = {
    chiTietPhongVe: {},
    dsGheDangDat: [],
    tabActive: '1',
    dsHoanTat: [],
 
}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_VE: {

            let dsGheCapNhat = [...state.dsGheDangDat]
            let index = dsGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)
            if (index != -1) {
                dsGheCapNhat.splice(index, 1);
            } else {
                dsGheCapNhat.push(action.gheDuocChon)
            }
         
            return { ...state, dsGheDangDat: dsGheCapNhat,dsHoanTat:dsGheCapNhat}
        }
        case DAT_VE_HOAN_TAT: {
           
            state.dsGheDangDat = [];
            return { ...state }
        }
        case CHUYEN_TAB: {
            state.tabActive = '2';
            return { ...state }
        }
        default: return { ...state }
    }
}