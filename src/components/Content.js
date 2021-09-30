import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
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
        <div className="main_content-block-elem">
          <div className="main_content-block-elem-item">
            Иванов Иван Иванович
          </div>
          <div className="main_content-block-elem-item">
            Иванов Иван Иванович
          </div>
          <div className="main_content-block-elem-item">
            02.01.2020
          </div>
          <div className="main_content-block-elem-item">
            Текс с жалобами пользователя на приеме
          </div>
          <div className="main_content-block-elem-item">
            <Link to="/techniques/delete">
              <button type="button" className="btn_delete" onClick={() => { window.location.href = "/techniques/delete" }}></button>
            </Link>
            <Link to="/techniques/edit">
              <button type="button" className="btn_edit" onClick={() => { window.location.href = "/techniques/edit" }}></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;