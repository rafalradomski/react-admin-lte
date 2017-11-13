import React from 'react';

export const CollapseBox = ({ text, type }) => (
    <div className="col-md-3">
    <div className={`box box-${type}`}>
      <div className="box-header with-border">
        <h3 className="box-title">{text.title}</h3>
        <div className="box-tools pull-right">
          <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus">-</i>
          </button>
        </div>
      </div>
      <div className="box-body">
      {text.bodyText}
      </div>
    </div>
  </div>
);