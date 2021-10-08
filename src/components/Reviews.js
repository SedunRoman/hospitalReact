import React, { useState, useContext, useCallback, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import TextField from "@material-ui/core/TextField";

const Reviews = ({ todos, setTodos }) => {
  const [name_input, nameText] = useState('')
  const [doc_select, docText] = useState('')
  const [date_input, dateText] = useState('')
  const [text_input, textText] = useState('')
  const { userId } = useContext(AuthContext)

  const getTodo = useCallback(async () => {
    try {
      await axios.get('/api/todo', {
        headers: {
          'Content-Type': 'application/json'
        },
        params: { userId }
      })
        .then((response) => setTodos(response.data))
    } catch (error) {
      console.log(error);
    }
  }, [userId, setTodos])

  const createTodo = useCallback(async () => {
    if (
      name_input
      && doc_select
      && date_input
      && text_input) {
      try {
        await axios.post('/api/todo/add',
          {
            name_input,
            doc_select,
            date_input,
            text_input,
            userId
          }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            setTodos([...todos], response.data)
            nameText('')
            docText('')
            dateText('')
            textText('')
            getTodo('')
          })
      } catch (error) {
        console.log(error)
      }
    }
    else {
      alert("Пожалуйста, заполните все поля!")
    }
  }, [name_input, doc_select, date_input, text_input, userId, todos, getTodo, setTodos])

  useEffect(() => {
    getTodo()
  }, [getTodo])

  const allDocSelect = [
    { name: "", value: "" },
    { name: "Manchenko Anatoliy", value: "Manchenko Anatoliy" },
    { name: "Sedun Roman", value: "Sedun Roman" },
    { name: "Krivochenko Viktoria", value: "Krivochenko Viktoria" },
    { name: "Usatova Darya", value: "Usatova Darya" },
  ];

  return (
    <div className="common-global">
      <div className="reviews">
        <div className="reviews-left">
          <div className="reviews-left-elem">
            <div className="reviews-left-elem-text">Имя:</div>
            <input
              type="text"
              name="name_input"
              value={name_input}
              onChange={e => nameText(e.target.value)} />
          </div>
          <div className="reviews-left-elem">
            <div className="reviews-left-elem-text">Врач:</div>
            <div className="reviews-left-elem-select">
              <TextField
                select
                value={doc_select}
                onChange={e => docText(e.target.value)}
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
          <div className="reviews-left-elem reviews-left-elem__date">
            <div className="reviews-left-elem-text">Дата:</div>
            <TextField
              type="date"
              value={date_input}
              onChange={(e) => dateText(e.target.value)}
            />
          </div>
          <div className="reviews-left-elem">
            <div className="reviews-left-elem-text">Жалобы:</div>
            <input
              type="text"
              name="text_input"
              value={text_input}
              onChange={e => textText(e.target.value)} />
          </div>
        </div>
        <div className="reviews-right">
          <button
            type="button"
            className="common-button"
            onClick={createTodo}
          >Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;