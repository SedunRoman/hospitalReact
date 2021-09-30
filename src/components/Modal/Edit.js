import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class Edit extends React.Component {
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
      <div className="modal-del_wrapper">
        <div className="modal-del">
          <div className="modal-del-header">
            Изменить прием
          </div>
          <div className="modal-del-content">
            <div className="modal-del-header-elem">
              <p>
                Имя:
              </p>
              <input type="text" />
            </div>
            <div className="modal-del-header-elem">
              <p>
                Врач:
              </p>
              <div className="modal-del-header-elem-select">
                <select>
                  <option value="value" disabled>Направление:</option>
                  <option>По возрастанию</option>
                  <option>По убыванию</option>
                </select>
              </div>
            </div>
            <div className="modal-del-header-elem">
              <p>
                Дата:
              </p>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div className="modal-del-header-elem">
              <p>
                Жалобы:
              </p>
              <textarea></textarea>
            </div>
          </div>
          <div className="modal-del-bottom">
            <Link to="/techniques">
              <button type="button" className="common-button btn_cancel" onClick={() => { window.location.href = "/techniques" }}>Cancel</button>
            </Link>
            <Link to="/techniques">
              <button type="button" className="common-button btn_save" onClick={() => { window.location.href = "/techniques" }}>Save</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;