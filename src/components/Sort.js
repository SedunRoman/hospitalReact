import React from "react";
import TextField from "@material-ui/core/TextField";

const Sort = ({
  todos,
  setTodos,
  dateFilter,
  setDateFilter,
  contentFilter,
  setContentFilter
}) => {

  const Direction = [
    { name: "increasing", value: "По возрастанию" },
    { name: "Decreasing", value: "По убыванию" },
  ];

  const allSort = [
    { name: "", value: "" },
    { name: "name", value: "Имя" },
    { name: "doctor", value: "Врач" },
    { name: "text", value: "Жалобы" },
  ];

  return (
    <div className="sort_block">
      <div className="reviews-left-elem">
        <div className="reviews-left-elem-text">Сортировать по:</div>
        <div className="reviews-left-elem-select">
          <TextField
            select
            SelectProps={{
              native: true,
            }}
          >
            {allSort.map((i) => (
              <option key={i.name} value={i.name}>
                {i.value}
                {console.log(i.name)}
              </option>
            ))}
          </TextField>
        </div>
      </div>
      <div className={contentFilter ? "reviews-left-elem_hide" : "reviews-left-elem"}>
        <div className="reviews-left-elem-text">Направление:</div>
        <div className="reviews-left-elem-select">
          <TextField
            select
            SelectProps={{
              native: true,
            }}
          >
            {Direction.map((i) => (
              <option key={i.name} value={i.name}>
                {i.value}
              </option>
            ))}
          </TextField>
        </div>
      </div>
      <div className="reviews-left-elem reviews-left-elem__sort">
        <div className="reviews-left-elem-text">Добавить фильтр по дате:</div>
        <button type="button" className="btn-filter"
          onClick={() => setDateFilter(true)}
        ></button>
      </div>
      <div className="sortBottom">
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">c:</div>
          <TextField
            type="date"
          />
        </div>
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">по:</div>
          <TextField
            type="date"
          />
        </div>
        <div className="reviews-left-elem reviews-left-elem__btn">
          <button type="button" className="common-button"
           onClick={() => setContentFilter(false)}>
             Фильтровать</button>
          <button type="button" className="btn-basket"
            // onClick={() => setDateFilter(false)}
            onClick={() => setContentFilter(true)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Sort;