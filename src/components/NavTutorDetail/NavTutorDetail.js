import React from 'react';
import './NavTutorDetail.css';
import tutorData from '../../data/tutor.json'

class NavTutorDetail extends React.Component{
    
    render(){
        const { url } = this.props;
        return(
            <div className="int_box">
                <img src={this.props.url} alt="留学,出国"/>
                <span className="int_name">{this.props.name}</span>
                <div className="int_con">
                    {this.props.intros.map((obj)=>{
                        return(
                            <div><span className="int_dian"></span>{obj}</div>
                        )
                    })}
                </div>
            </div>
            
        )
    }

}

export default NavTutorDetail;