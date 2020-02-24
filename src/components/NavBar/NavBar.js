import React from 'react';
import './NavBar.css';
import logo from '../../img/LOGO(3).png';
import '../../base.css';

class NavBar extends React.Component{

    render(){
        return(
            <header>
                <div className="head">
                    <div className="headimg">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="headlist">
                        <a href="index.html">首页</a>
                        <a href="about.html">关于我们</a>
                        <a href="consultant.html">顾问介绍</a>
                        <a href="offer.html">offer展示</a>
                        <a href="server.html">服务内容</a>
                        <a href="contact.html">联系我们</a>
                        <a href="background.html" class="ac">背景提升</a>
                    </div>
                </div>
            </header>

        )
    }

}

export default NavBar;