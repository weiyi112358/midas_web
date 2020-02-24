import React from 'react';
import './NavTutor.css';
import NavTutorDetail from '../NavTutorDetail/NavTutorDetail';
import tutorData from '../../data/tutor.json';


class NavTutor extends React.Component{

    render(){

		
		const requireContext = require.context("../../img/tutorBanner",true);
		const projectImgs = requireContext.keys().map(requireContext);
		const a = 1;
        return(
            <div className="full navTutorBg">
				<div className="width1200">
					<div className="width1200 navTutorBg2">
						<div className="indthree_tit">
							<span>顾问展示</span>
							<div className="indthree_line"></div>
						</div>
						<div className="indtwo">
						{tutorData.map((obj)=>{
							var imgURL;
							for (var j = 0; j < projectImgs.length;j++){
								if(projectImgs[j].indexOf(obj.url) > 0){
									imgURL = projectImgs[j];
								}
							}
							return(<NavTutorDetail url={imgURL} name={obj.name} intros={obj.intros}/>)
						})}
						</div>
						{/* <div className="indtwo">
							<div className="int_box">
								<img src="img/image012.jpg" alt="留学,出国"/>
								<span className="int_name">Dnniel Lu</span>
								<div className="int_con">
									<div><span className="int_dian"></span>美国华盛顿大学（西雅图）法学博士</div>
									<div><span className="int_dian"></span>城市规划与房地产双硕士</div>
									<div><span className="int_dian"></span>中科院建筑设计研究院有限公司顾问</div>
									<div><span className="int_dian"></span>Landesa中国问题项目组研究员</div>
									<div><span className="int_dian"></span>清华大学建筑设计研究院城市规划师助理</div>
									<div><span className="int_dian"></span>可提供西雅图大学内部推荐</div>
								</div>
							</div>
							<div className="int_box">
								<img src="img/Phyllis Zhong.jpg" alt="留学,出国"/>
								<span className="int_name">Phyllis Zhong</span>
								<div className="int_con">
									<div><span className="int_dian"></span>德国海德堡大学艺术史博士</div>
									<div><span className="int_dian"></span>伦敦大学学院艺术史硕士</div>
									<div><span className="int_dian"></span>曾任职于artnet News</div>
									<div><span className="int_dian"></span>曾任职于UK Tutor</div>
									<div><span className="int_dian"></span>曾任职于洛杉矶亚太博物馆</div>
								</div>
							</div>
							<div className="int_box">
								<img src="img/image018.jpg" alt="留学,出国"/>
								<span className="int_name">Jerry Xu</span>
								<div className="int_con">
									<div><span className="int_dian"></span>就职于美国谷歌(Google)公司</div>
									<div><span className="int_dian"></span>曾就职于美国思科(Cisco)公司</div>
									<div><span className="int_dian"></span>美国南加州大学计算机科学硕士</div>
									<div><span className="int_dian"></span>Project F项目负责人</div>
									<div><span className="int_dian"></span>Software-Defined Networking (SDN)项目负责人</div>
								</div>
							</div>
							<div className="int_box">
								<img src="img/image020.jpg" alt="留学,出国"/>
								<span className="int_name">Carl Cao</span>
								<div className="int_con">
									<div><span className="int_dian"></span>美国南加州大学材料科学博士</div>
									<div><span className="int_dian"></span>就职于维信诺公司</div>
									<div><span className="int_dian"></span>国际知名学术期刊审稿人</div>
								</div>
							</div>
							<div className="int_box">
								<img src="img/image010.png" alt="留学,出国"/>
								<span className="int_name">Joshua Wang</span>
								<div className="int_con">
									<div><span className="int_dian"></span>清华大学化学系博士</div>
									<div><span className="int_dian"></span>美国The Scripps Research Institute博士后</div>
									<div><span className="int_dian"></span>国际知名学术期刊审稿人</div>
								</div>
							</div>
							<div className="int_box">
								<img src="img/Liye Chen.jpg" alt="留学,出国"/>
								<span className="int_name">Andy Chen</span>
								<div className="int_con">
									<div><span className="int_dian"></span>美国普林斯顿大学博士</div>
									<div><span className="int_dian"></span>曾就职于上海有机化学研究所</div>
									<div><span className="int_dian"></span>顶级学术期刊论文发表经验</div>									
								</div>
							</div>
						</div> */}
					</div>
					<div className="width1200 navTutorMore">
						<a href="consultant.html">
							<div className="hasmore">查看更多</div>
						</a>
					</div>
				</div>
			</div>

        )
    }

}

export default NavTutor;