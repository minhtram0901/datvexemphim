import React, { Component } from "react";

export default class SeatRow extends Component {
  renderSeat = () => {
      const {seatRow, rowIndex} = this.props;
    return seatRow.danhSachGhe.map((seat, index) => {
      if (rowIndex === 0) {
        return (
            <div className="rowNumber" key={index}>
              {seat.soGhe}
            </div>
          );
      } else {
         let cssSeat = "ghe"; 
        if(seat.daDat === true){
            cssSeat = "gheDuocChon";
        }
        return (
          <div className={`${cssSeat}`} key={index}>
            {seat.soGhe}
          </div>
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
