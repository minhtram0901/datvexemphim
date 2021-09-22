import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSeatAction} from "../redux/action/movieTicketAction";

class SeatRow extends Component {
  renderSeat = () => {
    const { seatRow, rowIndex } = this.props;
    return seatRow.danhSachGhe.map((seat, index) => {      
      if (rowIndex === 0) {
        // render dòng hiển thị thứ tự ghế
        return (
          <div className="rowNumber" key={index}>
            {seat.soGhe}
          </div>
        );
      } else {
        // render hàng ghế
        let cssSeat = "ghe";
        let disable = false;
        if (seat.daDat === true) {
          // nếu là ghế đã bị người khác đặt
          cssSeat = "gheDuocChon";
          disable = true;
        }

        // Xét trạng thái ghế
        let indexGheDangDat = this.props.dsGheDangDat.findIndex(ghe => seat.soGhe === ghe.soGhe);
        if (indexGheDangDat != -1){
          //nếu là ghế đang chọn
          cssSeat = "gheDangChon";
        }
        return (
          <button
            className={`${cssSeat} my-1`}
            key={index}
            disabled={disable}
            onClick={() => {
              this.props.selectSeat(seat);
            }}
          >
            {seat.soGhe}
          </button>
        );
      }
    });
  };
  render() {
    return (
      <div className="seatRow d-flex">
        <div
          style={{
            width: "10%",
            fontSize: "30px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          {this.props.seatRow.hang}
        </div>
        <div
          style={{ width: "90%" }}
          className="d-flex justify-content-around mr-3"
        >
          {this.renderSeat()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.MovieTicketReducer.dsGheDangDat
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSeat: (ghe) => {
      dispatch(selectSeatAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatRow);