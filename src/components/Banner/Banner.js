import React from 'react';
import './Banner.css';

class Banner extends React.Component{
    render(){
        return(
            <div className="full banner">
				<div className="full lunbo">
					<div className="lunboac l1"></div>
					<div className="l2"  onclick="location.href='about.html#aboutone'"></div>
					<div className="l3"  onclick="location.href='about.html#abouttwo'"></div>
					<div className="l4"  onclick="location.href='about.html#aboutthree'"></div>
				</div>
				<div className="dian">
					<span className="dianac" alt="0"></span>
					<span alt="1"></span>
					<span alt="2"></span>
					<span alt="3"></span>
				</div>
			</div>
        )
    }


}

export default Banner