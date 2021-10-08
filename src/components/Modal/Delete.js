import React, { useCallback } from "react";
import axios from "axios";

const Delete = ({ todo, deleteFlag, setDeleteFlag }) => {

  const removeTodos = useCallback(async (id) => {
    try {
      await axios.delete(`/api/todo/delete/${id}`, { id }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          setDeleteFlag(false)
        })
    } catch (error) {
      console.log(error)
    }
  }, [setDeleteFlag])

  return (
    <div className={deleteFlag ? 'modal-del_wrapper' : 'inactive'}>
      <div className="modal-del modal-del__small">
        <div className="modal-del-header">
          Удалить прием
        </div>
        <div className="modal-del-block">
          Вы действительно хотите удалить прием?
        </div>
        <div className="modal-del-bottom">
          <button type="button" className="common-button btn_cancel"
            onClick={() => { window.location.href = "/techniques" }}
          >Cancel</button>
          <button type="button" className="common-button btn_save"
            onClick={() => {
              removeTodos(todo._id)
              window.location.href = "/techniques"
            }}
          >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;