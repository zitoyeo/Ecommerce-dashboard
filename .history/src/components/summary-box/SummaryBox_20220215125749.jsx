import React from "react";
import './summary-box.scss';
import Box from '../box/Box'
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const SummaryBox = ({item}) => {
  return (
 <Box>
      <div className="summary-box">
      <div className="summary-box__info">
            <div className="summary-box__info__title">
                <div>{item.title}</div>
                <span>{item.subtitle}</span>
            </div>
            <div className="summary-box__info__value">
                {item.value}
            </div>
            <div className="summary-box__chart">
                <CircularProgressbarWithChildren>
                  <div className="summary-box__chart__value">
                    {item.percent}%
                  </div>
                </CircularProgressbarWithChildren>
            </div>
      </div>
     {item.title}
  </div>
 </Box>
  )
};

export default SummaryBox;