import React from "react";

const Reduxtable = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
            <div className="my-5">
              <div className="text-center">
                <h1 className="bg-info my-3">Form Data</h1>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" class="btn btn-primary">
                  Back To Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reduxtable;
