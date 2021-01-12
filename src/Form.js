import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Reduxtable from "./Reduxtable";

const Form = (props) => {
  const [profile, setprofile] = useState(false);
  const { handleSubmit } = props;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
            <div className="title text-white text-center bg-primary my-5">
              <h1>Redux Form</h1>
            </div>
            <div className="form mb-5">
              <form
                onSubmit={handleSubmit((formValues) => {
                  console.log(formValues);
                  setprofile(true);
                })}
              >
                <div className="mb-3">
                  <label>Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="name"
                    component="input"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    component="input"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label>Number</label>
                  <Field
                    className="form-control"
                    type="number"
                    name="number"
                    component="input"
                    required
                    autoComplete="off"
                  />
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="Profile my-5">
              {profile ? <Reduxtable /> : null}
              {/* <Reduxtable /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default reduxForm({
  form: "myForm",
})(Form);
