import React from "react";
import { data } from "../../constants";
import './revenue-list.scss'
import ProgressBar from "../progressbar/ProgressBar";

const RevenueList = () => {
  return <div className="revenue-list">{


    data.revenueByChannel.map((item, index) => (
        <li className="revenue-list__item" key={`revenue-${index}`}>
            <div className="revenue-list__item__title">
                {item.title}
                <span className={
                    `${item.value < 50 ? 'txt-success' : 'txt-danger' }`
                }>{item.value}%</span>
            </div>
                <div>
                    {/** progressbar  */}
                    <ProgressBar value={item.value}/>
                </div>
        </li>
    ))

  }</div>;
};

export default RevenueList;
