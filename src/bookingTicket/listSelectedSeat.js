import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSeatAction } from "../redux/action/movieTicketAction";

class ListSelectedSeat extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <!-- START --> */}
        <div className="d-flex flex-row align-items-center">
          <span className="gheDuocChon ml-3 mr-2 my-1"></span>
          <span style={{ fontSize: "20px" }}>Ghế đã đặt</span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <span className="gheDangChon ml-3 mr-2 my-1"></span>
          <span style={{ fontSize: "20px" }}>Ghế đang chọn</span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <span className="ghe ml-3 mr-2 my-2"></span>
          <span style={{ fontSize: "20px" }}>Ghế chưa đặt</span>
        </div>

        <table id="main-table" className="main-table table table-dark table-sm">
          <thead>
            <tr>
              <th className="col-4">Số ghế</th>
              <th className="col-4">Giá</th>
              <th className="col-4">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dsGheDangDat.map((ghe) => {
              return (
                <tr>
                  <td className="col-4">{ghe.soGhe}</td>
                  <td className="col-4">{ghe.gia}</td>
                  <td className="col-4">
                    <button
                      className="btnDelete"
                      onClick={() => {
                        this.props.deleteSeat(ghe.soGhe);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-warning">
              <td>Tổng tiền</td>
              <td></td>
              <td>{this.props.dsGheDangDat.reduce((tongTien, ghe, index) => {
                  return tongTien += ghe.gia;
              }, 0)}</td>
            </tr>
          </tfoot>
        </table>
        {/* <!-- END --> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.MovieTicketReducer.dsGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSeat: (soGhe) => {
      dispatch(deleteSeatAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSelectedSeat);
