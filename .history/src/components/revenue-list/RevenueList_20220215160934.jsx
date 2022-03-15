import React from "react";
import { data } from "../../constants";
import './revenue-list.scss'

const RevenueList = () => {
  return <div className="revenue-list">{


    data.revenueByChannel.map((item, index) => (
        <li className="revenue-list__item" key={`revenue-${index}`}>
            <div className="revenue-list__item__title">
                {item.title}
                <span className={
                    `${item.value < 50 ? 'text-sucess' : 'txt-danger' }`
                }>{item.value}%</span>
            </div>

        </li>
    ))

  }</div>;
};

export default RevenueList;
