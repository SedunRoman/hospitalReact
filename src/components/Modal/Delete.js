import React from "react";
import { Link } from "react-router-dom";

const Delete = () => {
  return (
    <div className="modal-del_wrapper">
      <div className="modal-del modal-del__small">
        <div className="modal-del-header">
          Удалить прием
        </div>
        <div className="modal-del-block">
          Вы действительно хотите удалить прием?
        </div>
        <div className="modal-del-bottom">
          <Link to="/techniques">
            <button type="button" className="common-button btn_cancel" onClick={() => { window.location.href = "/techniques" }}>Cancel</button>
          </Link>
          <Link to="/techniques">
            <button type="button" className="common-button btn_save" onClick={() => { window.location.href = "/techniques" }}>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Delete;