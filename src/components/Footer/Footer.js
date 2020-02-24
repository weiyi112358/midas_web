import React from 'react';
import './Footer.css';
import '../../base.css';
import logo from '../../img/WechatIMG12.png';
import wechatLogo from '../../img/337.jpg';

class Footer extends React.Component{
    render(){
        return(
            <div className="full footerBg">
                <div className="width1200 footer">
                    <div className="fotone">
                        <img src={logo} />
                        <p>Midas留学服务是总部位于美国洛杉矶的第三方服务平台，对接海外行业精英为
                            您提供留学服务。服务内容包括留学咨询，背景提升，文书撰写，选校网申，材料翻译，行前指导等</p>
                    </div>
                    <div className="fottwo">
                        <span className="fot-hea-tit">导航</span>
                        <a href="index.html" target="_parent">平台首页</a>
                        <a href="about.html" target="_parent">关于我们</a>
                        <a href="consultant.html" target="_parent">顾问咨询</a>
                        <a href="offer.html" target="_parent">offer展示</a>
                        <a href="server.html" target="_parent">文书服务</a>
                        <a href="contact.html" target="_parent">联系我们</a>
                        <a href="background.html" target="_parent">背景提升</a>
                    </div>
                    <div className="fotthree">
                        <span className="fot-hea-tit">联系我们</span>
                        <span>企业邮箱：labofmidas@gmail.com</span>
                        <span>联系QQ：2060699770</span>
                        {/* <!-- <span>由于客服人员都在国外，反馈较慢，请耐心等待</span> --> */}
                        
                    </div>
                    <div className="fotfour">
                        <span class="fot-hea-tit">微信公众号</span>
                        <img src={wechatLogo} alt="留学,出国"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;