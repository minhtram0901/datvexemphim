import {SELECT, DELETE} from "../type/movieTicketType";

const initState = {
    dsGheDangDat : []
}

const MovieTicketReducer = (state = initState, action) => {
    switch (action.type){
        case SELECT:{
            let dsGheDangDat = [...state.dsGheDangDat];
            let index = dsGheDangDat.findIndex(ghe => ghe.soGhe === action.payload.soGhe);
            if (index != -1){
                // ghế đang được chọn
                dsGheDangDat.splice(index, 1);
            } else{
                // ghế chưa chọn

                dsGheDangDat.push(action.payload);
            }
            state.dsGheDangDat = dsGheDangDat;
            return {...state};
        }

        case DELETE:{
            let dsGheDangDat = [...state.dsGheDangDat];
            let index = dsGheDangDat.findIndex(ghe => ghe.soGhe === action.payload);
            if (index != -1){
                // ghế đang được chọn
                dsGheDangDat.splice(index, 1);
            }
            state.dsGheDangDat = dsGheDangDat;
            return {...state};
        }

        default: 
            return {...state};
    }
    
}


export default MovieTicketReducer;