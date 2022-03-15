import React from "react";
import './summary-box.scss';
import Box from '../box/Box'
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { colors } from "../../constants";

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
                <CircularProgressbarWithChildren
                  value={item.percent}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor : item.percent < 50 ? colors.red : colors.purple,
                    trailColor : 'tranparent',
                    strokeLinecap : 'round'
                  })}
                >
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

export const SummaryBoxSpecial = ({item}) => {
  return (
    <Box purple fullheight>
        <div className="summary-box-special">
          <div className="summary-box-special__title">
            {item.title}
          </div>
          <div className="summary-box-special__value">
            {item.value}
          </div>
  
        </div>
    </Box>
  )
}