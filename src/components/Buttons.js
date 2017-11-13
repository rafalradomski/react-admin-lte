import React from "react";

export const ImageButton = () => (
  <a className="btn btn-app">
    <i className="fa fa-edit" /> Edit
  </a>
);

export const TextButton = () => (
  <button type="button" className="btn btn-block btn-primary">
    Primary
  </button>
);

export const IconButton = () => (
  <a className="btn btn-block btn-social btn-facebook">
    <i className="fa fa-facebook" /> Sign in with Facebook
  </a>
);
