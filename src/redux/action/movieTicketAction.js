import {SELECT, DELETE} from "../type/movieTicketType";

export const selectSeatAction = (ghe) => {
    return {
        type: SELECT,
        payload: ghe
    }
}

export const deleteSeatAction = (soGhe) => {
    return {
        type: DELETE,
        payload: soGhe
    }
}