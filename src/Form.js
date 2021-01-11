import React, { useState } from "react";

const Form = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");

  const contactsubmit = () => {
    props.submitform(name, email, number);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
            <div className="title text-white text-center bg-primary my-5">
              <h1>Redux Form</h1>
            </div>
            <div className="form mb-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    className="form-control"
                    id="name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="form-control"
                    id="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    name="number"
                    type="number"
                    value={number}
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    className="form-control"
                    id="number"
                    autoComplete="off"
                    required
                  />
                </div>
                <button
                  onClick={contactsubmit}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitform: (name, email, number) => {
      dispatch({
        type: "submit",
        payload: {
          name,
          email,
          number,
        },
      });
    },
  };
};

export default Form;
