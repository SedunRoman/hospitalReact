import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="sort_block">
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">Сортировать по:</div>
          <div className="reviews-left-elem-select">
            <select defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled></option>
              <option>Имя</option>
              <option>Врач</option>
              <option>Дата</option>
              <option>Жалобы</option>
            </select>
          </div>
        </div>
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">Направление:</div>
          <div className="reviews-left-elem-select">
            <select defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled></option>
              <option>По возрастанию</option>
              <option>По убыванию</option>
            </select>
          </div>
        </div>
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">Добавить фильтр по дате:</div>
          <button type="button" className="btn-filter"></button>
        </div>
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">c:</div>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="reviews-left-elem">
          <div className="reviews-left-elem-text">по:</div>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="reviews-left-elem">
          <button type="button" className="common-button">Фильтровать</button>
        </div>
        <div className="reviews-left-elem">
          <button type="button" className="btn-basket"></button>
        </div>
      </div>
    );
  }
}

export default Sort;