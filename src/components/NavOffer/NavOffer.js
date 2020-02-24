import React from 'react';
import './NavOffer.css';

class NavOffer extends React.Component{

    render(){
        return(
            <div className="full">
				<div className="width1200" style="padding-bottom: 50px;padding-top: 50px">
					<div className="indthree_tit">
						<span>Offer Show</span>
						<div className="indthree_line"></div>
					</div>
					<div className="indthree">
						<div className="inth_way wayright">
							<img src="./img/left.png" alt="留学,出国"/>
						</div>
						<div className="inth_box">
							<div>
								<img src="img/offer/哥伦比亚大学 材料科学与工程 硕士.jpg" alt="留学,出国"/>
								<div clasclassNames="img_con">
									<span className="offschool"><span></span>哥伦比亚大学<span></span></span>
									<span>材料科学与工程</span>
								</div>
							</div>
							<div>
								<img src="img/offer/康奈尔大学 材料科学与工程 硕士.jpg" alt="留学,出国"/>
								<div className="img_con">
									<span className="offschool"><span></span>康奈尔大学<span></span></span>
									<span>材料科学与工程</span>
								</div>
							</div>
							<div>
								<img src="img/offer/西北大学 生物医学工程 硕士.jpg" alt="留学,出国"/>
								<div className="img_con">
									<span className="offschool"><span></span>西北大学<span></span></span>
									<span>生物医学工程</span>
								</div>
							</div>
							<div>
								<img src="img/offer/密歇根大学 材料科学与工程 硕士.jpg" alt="留学,出国"/>
								<div className="img_con">
									<span className="offschool"><span></span>密歇根大学<span></span></span>
									<span>材料科学与工程</span>
								</div>
							</div>
							<div>
								<img src="img/offer/佐治亚理工 材料科学与工程 硕士.jpg" alt="留学,出国"/>
								<div className="img_con">
									<span className="offschool"><span></span>佐治亚理工大学<span></span></span>
									<span>材料科学与工程</span>
								</div>
							</div>
							<div>
								<img src="img/offer/圣路易斯华盛顿大学 生物医学工程 硕士.jpg" alt="留学,出国"/>
								<div className="img_con">
									<span className="offschool"><span></span>圣路易斯华盛顿大学<span></span></span>
									<span>生物医学工程</span>
								</div>
							</div>
							<div>
								<img src="img/offer/麦吉尔大学 计算机科学 硕士.jpg" alt="留学,出国"/>
								<div className="img_con">
									<span className="offschool"><span></span>麦吉尔大学<span></span></span>
									<span>计算机科学</span>
								</div>
							</div>
						</div>
						<div className="inth_way wayleft">
							<img src="./img/right.png" alt="留学,出国"/>
						</div>
					</div>
					<a href="offer.html">
						<div className="hasmore">查看更多</div>
					</a>
				</div>
			</div>

        )
    }

}

export default NavOffer;