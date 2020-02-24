import React from 'react';
import './Sphere.css';

class Sphere extends React.Component{

    render(){
        return(
            <div class="width1200 whyus">
				<div class="whyuscon">
					<span>为什么选择Midas</span>
					<p>Midas留学创立于天使之城洛杉矶，致力于搭建全球化平台，直接对接客户与留学顾问，去除中介环节，以低廉的价格为客户提供国际化的高端留学咨询服务，构建完善、细致、高效的一站式流程，打造专业、高端、平价的留学品牌。能通过Midas遴选的顾问必须来自全球知名大学、研究所、世界500强企业及顶级私立中学，具有硕士以上学位，且博士与博士后分别占到50%与36%。Midas长期开拓知名大学内部人脉与资源，并于部分名校建立了合作关系。凭借丰富的行业经验与资源为广大留学生深度剖析录取规则与流程，打造个性化的申请策略，助力数百位留学生获得了世界名校得青睐。</p>
				</div>
				<canvas width="500" height="400" id="myCanvas">
            <p>Anything in here will be replaced on browsers that support the canvas element</p>
        </canvas>
				<div id="tags" class="whyusani">
					<ul>
						<li>
							<a href="javascript:void(0);">大数据</a>
						</li>
						<li>
							<a href="javascript:void(0);">个性化定制</a>
						</li>
						<li>
							<a href="javascript:void(0);">国际化思维</a>
						</li>
						<li>
							<a href="javascript:void(0);">行业精英</a>
						</li>
						<li>
							<a href="javascript:void(0);">高端留学品牌</a>
						</li>
						<li>
							<a href="javascript:void(0);">真实可靠</a>
						</li>
						<li>
							<a href="javascript:void(0);">平价服务</a>
						</li>
					</ul>
				</div>
			</div>

        )
    }
}

export default Sphere;


