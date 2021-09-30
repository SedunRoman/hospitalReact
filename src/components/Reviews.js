import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Reviews extends React.Component {
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
      <div className="common-global">
        <div className="reviews">
          <div className="reviews-left">
            <div className="reviews-left-elem">
              <div className="reviews-left-elem-text">Имя:</div>
              <input type="text" />
            </div>
            <div className="reviews-left-elem">
              <div className="reviews-left-elem-text">Врач:</div>
              <div className="reviews-left-elem-select">
                <select defaultValue={'DEFAULT'}>
                  <option value="DEFAULT" disabled></option>
                  <option>Manchenko Anatoliy</option>
                  <option>Sedun Roman</option>
                  <option>Krivochenko Viktoria</option>
                  <option>Usatova Darya</option>
                </select>
              </div>
            </div>
            <div className="reviews-left-elem">
              <div className="reviews-left-elem-text">Дата:</div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="reviews-left-elem">
              <div className="reviews-left-elem-text">Жалобы:</div>
              <input type="text" />
            </div>
          </div>
          <div className="reviews-right">
            <button type="button" className="common-button">Добавить</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;