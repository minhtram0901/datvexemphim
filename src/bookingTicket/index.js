import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "../assets/css/index.css";
import data from "../assets/data/danhSachGhe.json";
import SeatRow from "./seatRow";
import ListSelectedSeat from "./listSelectedSeat";

class BookingTicket extends Component {

  renderSeatRow = () => {
    return data.map((seatRow, index) => {
      return <SeatRow seatRow={seatRow} key={index} rowIndex={index} />;
    });
  };

  render() {
    return (
      <div className="bookingMovie">
        <div className="bookingMovie__container">
          <div className="header my-2">Đặt vé xem phim Cybersoft.vn</div>
          <div className="row">
            <div className="col-7 ">
              <div className="seatmap">
                <div className="sub-title mt-3 mb-2">Sơ đồ ghế</div>
                <div className="screen mb-5">Màn hình</div>
                {this.renderSeatRow()}
              </div>
            </div>
            <div className="col-5">
              <div className="seatinfo">
                <div className="sub-title mt-3 mb-2">Thông tin đặt chỗ</div>
                <ListSelectedSeat/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingTicket;
