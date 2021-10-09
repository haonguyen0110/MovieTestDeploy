import { history } from "../../App"
import { quanLyPhimService } from "../../Services/QuanLyPhimService"
import { GET_MOVIE, SET_THONG_TIN_PHIM } from "./types/getMovieType"





export const getMovieAction =(tenPhim='')=>{


    return   async(dispatch)=>{

        try {
    
            const result = await quanLyPhimService.getMovie(tenPhim)
            dispatch({
              type: GET_MOVIE,
              arrMovie: result.data.content
            })
          } catch (errors) {
            console.log('errors', errors)
          }
    }
}



export const themPhimUploadHinhAction = (formData)=>{
  return async (dispatch)=>{
    try {
      let result = await quanLyPhimService.themPhimUploadHinh(formData);
      alert('Thêm phim thành công!')
      console.log(result)
    } catch (error) {
      console.log(error.response?.data)
      alert(error.response?.data.content)
    }
  }
}


export const layThongTinPhimAction = (maPhim)=>{
  return async (dispatch)=>{
    try {
      let result = await quanLyPhimService.layThongTinPhim(maPhim);
      dispatch({
        type:SET_THONG_TIN_PHIM,
        MovieEdit : result.data.content
      })
      
    } catch (error) {
      console.log(error.response?.data)
    }
  }
}

export const capNhatPhimUploadAction = (formData)=>{
  return async (dispatch)=>{
    try {
      let result = await quanLyPhimService.capNhatPhimUpload(formData);
      alert('Cập nhật phim thành công!')
      dispatch(getMovieAction())
      history.push('/admin/movie')
    } catch (error) {
      console.log(error.response?.data)
    }
  }
}


export const xoaPhimAction =(maPhim)=>{
  return async (dispatch)=>{
    try {
      let result = await quanLyPhimService.xoaPhim(maPhim);
      alert('Xóa phim thành công')
      dispatch(getMovieAction())
    } catch (error) {
      console.log(error.response?.data)
      alert(error.response?.data.content)
    }
  }
}