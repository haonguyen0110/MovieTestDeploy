import axios from "axios";
import { quanLyPhimService } from "../../Services/QuanLyPhimService";
import { DOMAIN } from "../../Util/Settings/config";
import { SET_CAROUSEL } from "./types/CarouselType";


export const getCarouseAction= async(dispatch)=>{
    
    
    try {

        const result = await quanLyPhimService.layDanhSachBanner()
        dispatch({
          type: SET_CAROUSEL,
          arrBanner: result.data.content
        })
      } catch (errors) {
        console.log('errors', errors)
      }
   
}