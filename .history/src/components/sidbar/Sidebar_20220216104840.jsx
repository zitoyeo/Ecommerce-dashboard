import React, { useEffect, useState } from "react";
import './sidebar.scss'
import { Link, useLocation } from "react-router-dom";
import {images} from '../../constants';
import sidebarNav from '../../configs/sidebarNav'

const Sidebar = () => {


    //이 파트를 좀 유심있게 봐보자 . 실제 state를 직접 수정하지 않고, setState를 통해 원하는 값에 대하여 변경을 하는것이 핵심.
    const [activeIndex, setActiveIndex] = useState(0)
    const location =useLocation();

    useEffect (() => {
        const curPath = window.location.pathname.split('/')[1] //split으로 1번부터 시작한다 
        const activeItem = sidebarNav.findIndex(item => item.section === curPath) // sidevarnav에 있는 index번호 순서는 curpath를 통해 item들이 움직이게 한다.

        setActiveIndex(curPath.length === 0? 0: activeItem)
    },[location])


        const closeSidebar = (e) => {
            document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
            e.prventDefault();
            setTimeout(() => {
                document.body.classList.remove('sidebar-open')
                document.querySelector('.main__content').style = ''
              
                
            }, 500);
        }

      return (
  <div className="sidebar">
     <div className="sidebar__logo">
         <img src={images.logo} alt="" />
         <div className="sidebar-close" onClick={closeSidebar}>
             <i className="bx bx-x"></i>
         </div>
     </div>
      <div className="sidebar__menu">
          {
              sidebarNav.map((nav, index) => (
                  <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'} `}  onClick={closeSidebar}>
                     
                      <div className="sidebar__menu__item__text">
                          {nav.text}
                      </div>
                  </Link>
              ))
          }
          <div className="sidebar__menu__item">
              <div className="sidebar__menu__item__icon">
                  <i className="bx bx-log-out">

                  </i>
              </div>
              <div className="sidebar__menut__item__text">
                  Logout
              </div>
          </div>
      </div>
  </div>
  )
};

export default Sidebar;