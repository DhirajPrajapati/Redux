import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";

const Reduxtable = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
            <div className="my-5">
              <div className="text-center">
                <h1 className="bg-info my-3">Form Data</h1>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.FormData.name}</td>
                      <td>{props.FormData.email}</td>
                      <td>{props.FormData.number}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    FormData: state.form.myForm.values,
  };
};

export default connect(mapStateToProps)(Reduxtable);
