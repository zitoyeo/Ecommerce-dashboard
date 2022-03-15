import React from "react";
import {BsArrowRight} from 'react-icons/bs';
import song1 from '../../assets/images/song1.jpeg';
import song2 from '../../assets/images/song2.jpeg';
import song3 from '../../assets/images/song3.jpeg';
import './trendingtracks.scss'


const TrendingTracks = () => {
    return <div className="trending__tracks">
        <div className="trending__info">
            <div>
                <h3>Trending Tracks</h3>
                <span>Today</span>
            </div>
            <div className="icon">
                <BsArrowRight/>
            </div>
        </div>
        <div className="trend">
            <div className="trend__info"></div>
            <img src={song1} alt=""  style={{ height: 3 }}/>
            <div>
                <h4>Positions</h4>
                <span>Arianan Grande</span>
            </div>
        </div>
        <div className="trend__meta">
            <span>3.49M plays</span>
            <span>232K likes</span>
        </div>
        <div className="trend">
            <div className="trend__info"></div>
            <img src={song2} alt="" />
            <div>
                <h4>Tranmpoline</h4>
                <span>Zyan Malik</span>
            </div>
        </div>
        <div className="trend__meta">
            <span>43.49B plays</span>
            <span>512K likes</span>
        </div>
        <div className="trend">
            <div className="trend__info"></div>
            <img src={song3} alt="" />
            <div>
                <h4>Without Me</h4>
                <span>Hasley</span>
            </div>
        </div>
        <div className="trend__meta">
            <span>13.49M plays</span>
            <span>442K likes</span>
        </div>
    </div>
}

export default TrendingTracks