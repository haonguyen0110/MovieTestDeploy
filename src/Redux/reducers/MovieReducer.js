import { GET_MOVIE, SET_MOVIE_DANG_CHIEU, SET_MOVIE_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../actions/types/getMovieType"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType"


const stateDefaut = {
    arrMovie: [],
    arrMovieDefault: [],
    dangChieu: true,
    sapChieu: false,
    MovieDetail: { hinhAnh: 'https://picsum.photos/id/20/250/300' },
    MovieEdit: {}
}

export const MovieReducer = (state = stateDefaut, action) => {
    switch (action.type) {
        case GET_MOVIE: {
            state.arrMovie = action.arrMovie
            state.arrMovieDefault = state.arrMovie
            return { ...state }
        }
        case SET_MOVIE_DANG_CHIEU: {
            state.sapChieu = false;
            state.dangChieu = true

            state.arrMovie = state.arrMovieDefault.filter(movie => movie.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_MOVIE_SAP_CHIEU: {
            state.dangChieu = false;
            state.sapChieu = true
            state.arrMovie = state.arrMovieDefault.filter(movie => movie.sapChieu === state.sapChieu);
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.MovieDetail = action.MovieDetail;
            return { ...state }
        }
        case SET_THONG_TIN_PHIM: {
            state.MovieEdit = action.MovieEdit
            return {...state}
        }
        default: return { ...state }
    }
}