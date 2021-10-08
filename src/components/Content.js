import Delete from "./Modal/Delete";
import Edit from "./Modal/Edit";
import { useState } from "react";

const Content = ({ todos, setDeleteFlag, deleteFlag, setEditFlag, editFlag }) => {
  const [todo, setTodo] = useState([])

  return (
    <div className="common-global_bottom">
      <div className="main_content_wrapper">
        <div className="main_content">
          <div className="main_content-title">
            <div className="main_content-title-elem">
              Имя
            </div>
            <div className="main_content-title-elem">
              Врач
            </div>
            <div className="main_content-title-elem">
              Дата
            </div>
            <div className="main_content-title-elem">
              Жалобы
            </div>
            <div className="main_content-title-elem">

            </div>
          </div>
          <div className="main_content-block">
            {
              todos.map((todo, index) => {
                return (
                  <div className="main_content-block-elem" key={index}>
                    <div className="main_content-block-elem-item">
                      {todo.name_input}
                    </div>
                    <div className="main_content-block-elem-item">
                      {todo.doc_select}
                    </div>
                    <div className="main_content-block-elem-item">
                      {todo.date_input}
                    </div>
                    <div className="main_content-block-elem-item">
                      {todo.text_input}
                    </div>
                    <div className="main_content-block-elem-item">
                      <button type="button" className="btn_delete"
                        onClick={() => {
                          setTodo(todo)
                          setDeleteFlag(true)
                        }}
                      ></button>
                      <button type="button" className="btn_edit"
                        onClick={() => {
                          setTodo(todo)
                          setEditFlag(true)
                        }}
                      ></button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <Delete
            deleteFlag={deleteFlag}
            setDeleteFlag={setDeleteFlag}
            editFlag={editFlag}
            setEditFlag={setEditFlag}
            todo={todo}
          ></Delete>
          <Edit
            deleteFlag={deleteFlag}
            setDeleteFlag={setDeleteFlag}
            editFlag={editFlag}
            setEditFlag={setEditFlag}
            todo={todo}
          ></Edit>
        </div>
      </div>
    </div>

  );
}

export default Content;