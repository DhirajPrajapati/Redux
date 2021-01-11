import React from "react";

const initialstate = {
  name: "",
  email: "",
  number: "",
};

const fromreducer = (state = initialstate, action) => {
  if (action === "submit") {
    return action.payload;
  } else {
    return state;
  }
};

export default fromreducer;
