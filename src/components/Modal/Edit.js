import React, { useCallback, useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const Edit = ({ todos, todo, editFlag, setTodos, getTodo }) => {

  const [inputValue, setInputValue] = useState({})

  const onClickEdit = useCallback(async (id) => {
    try {
      await axios.put(`/api/todo/edit/${id}`, {
        name_input: inputValue.name_input,
        doc_select: inputValue.doc_select,
        date_input: inputValue.date_input,
        text_input: inputValue.text_input
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          setTodos([...todos], response.data)
          getTodo()
        })
    } catch (error) {
      console.log(error)
    }

  }, [getTodo, todos, inputValue, setTodos])

  const allDocSelect = [
    { name: "", value: `${todo.doc_select}` },
    { name: "Manchenko Anatoliy", value: "Manchenko Anatoliy" },
    { name: "Sedun Roman", value: "Sedun Roman" },
    { name: "Krivochenko Viktoria", value: "Krivochenko Viktoria" },
    { name: "Usatova Darya", value: "Usatova Darya" },
  ];

  return (
    <div className={editFlag ? 'modal-del_wrapper' : 'inactive'}>
      <div className="modal-del">
        <div className="modal-del-header">
          Изменить прием
        </div>
        <div className="modal-del-content">
          <div className="modal-del-header-elem">
            <p>
              Имя:
            </p>
            <textarea
              defaultValue={todo.name_input}
              value={inputValue.name_input}
              onChange={e => setInputValue({
                ...inputValue,
                name_input: e.target.value
              })}
            ></textarea>
          </div>
          <div className="modal-del-header-elem">
            <p>
              Врач:
            </p>
            <div className="modal-del-header-elem-select">
              <TextField
                select
                onChange={e => setInputValue({
                  ...inputValue,
                  doc_select: e.target.value
                })}
                SelectProps={{
                  native: true,
                }}
              >
                {allDocSelect.map((i) => (
                  <option key={i.name} value={i.name}>
                    {i.value}
                  </option>
                ))}
              </TextField>
            </div>
          </div>
          <div className="modal-del-header-elem modal-del-header-elem__date">
            <p>
              Дата:
            </p>
            <TextField
              type="date"
              value={inputValue.date_input}
              onChange={e => setInputValue({
                ...inputValue,
                date_input: e.target.value
              })}
            />
          </div>
          <div className="modal-del-header-elem">
            <p>
              Жалобы:
            </p>
            <textarea
              defaultValue={todo.text_input}
              value={inputValue.text_input}
              onChange={e => setInputValue({
                ...inputValue,
                text_input: e.target.value
              })}
            ></textarea>
          </div>
        </div>
        <div className="modal-del-bottom">
          <button type="button" className="common-button btn_cancel"
            onClick={() => { window.location.href = "/techniques" }}
          >Cancel</button>
          <button type="button" className="common-button btn_save"
            onClick={() => {
              onClickEdit(todo._id)
              window.location.href = "/techniques"
            }}
          >Save</button>
        </div>
      </div>
    </div>
  );
}

export default Edit;