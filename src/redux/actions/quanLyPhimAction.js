import axios from "axios"
import { http } from "../../util/setting"


export const layDanhSachPhimAction = () =>{
    return async (dispatch) => {
        try {
            let result = await http.get('/api/QuanLyPhim/LayDanhSachBanner');
            dispatch({
                type: 'LAY_DANH_SACH_PHIM',
                arrPhim: result.data.content
            })
        } catch (error) {
            console.log('error: ', error)
        }
    }
}