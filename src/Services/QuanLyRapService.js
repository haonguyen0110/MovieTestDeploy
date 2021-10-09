import { GROUPID } from "../Util/Settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }

   layThongTinLichChieuPhim=(maPhim)=>{
       return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
   }
   layThongTinHeThongRap = ()=>{
       return this.get(`api/QuanLyRap/LayThongTinHeThongRap`)
   }
   layThongTinCumRapTheoHeThong = (maHeThongRap)=>{
       return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
   }
}


export const quanLyRapService = new QuanLyRapService();
