import { THEM_NGUOI_DUNG } from "./types/baiTapQuanLyNguoiDungType"

export const themNguoiDungAction = (nguoiDung) => {
    return {
        type: THEM_NGUOI_DUNG,
        nguoiDung: nguoiDung
    }
}