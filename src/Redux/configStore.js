import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { MovieReducer } from "./reducers/MovieReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
const rootReducer = combineReducers({
    CarouselReducer,
    MovieReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))