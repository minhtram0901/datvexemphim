import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "../assets/css/index.css";
import data from "../assets/data/danhSachGhe.json";
import SeatRow from "./seatRow";

class BookingTicket extends Component {
  constructor(props) {
    super(props);
    this.mainTable = React.createRef();
    this.fauxTable = React.createRef();
  }
  renderSeatRow = () => {
    return data.map((seatRow, index) => {
      return <SeatRow seatRow={seatRow} key={index} rowIndex={index} />;
    });
  };

  componentDidMount() {
    const fauxTable = document.getElementById("faux-table");
    const mainTable = document.getElementById("main-table");
    let clonedElement = mainTable.cloneNode(true);
    let clonedElement2 = mainTable.cloneNode(true);
    clonedElement.id = "";
    clonedElement2.id = "";
    fauxTable.appendChild(clonedElement);
    fauxTable.appendChild(clonedElement2);
  }
  render() {
    return (
      <div className="bookingMovie">
        <div className="bookingMovie__container">
          <div className="header my-4">Đặt vé xem phim Cybersoft.vn</div>
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
                <div className="d-flex flex-row align-items-center">
                  <span className="gheDuocChon ml-3 mr-2 my-1"></span>
                  <span style={{ fontSize: "20px" }}>Ghế đã đặt</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="gheDangChon ml-3 mr-2 my-1"></span>
                  <span style={{ fontSize: "20px" }}>Ghế đang chọn</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="ghe ml-3 mr-2 my-1"></span>
                  <span style={{ fontSize: "20px" }}>Ghế chưa đặt</span>
                </div>
                {/* <!-- START --> */}
                <div id="table-scroll" className="table-scroll">
                  <div
                    id="faux-table"
                    className="faux-table"
                    aria-hidden="true"
                    ref={this.fauxTable}
                  ></div>
                  <div className="table-wrap">
                    <table
                      id="main-table"
                      className="main-table"
                      ref={this.mainTable}
                    >
                      <thead>
                        <tr>
                          <th className="col-4">Số ghế</th>
                          <th className="col-4">Giá</th>
                          <th className="col-4">AAA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                        <tr>
                          <td className="col-4">Số ghế</td>
                          <td className="col-4">Giá</td>
                          <td className="col-4">AAA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- END --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingTicket;
