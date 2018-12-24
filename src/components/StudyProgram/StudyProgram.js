import React, { Component } from 'react';


class StudyProgram extends Component{
    constructor(props){
        super(props);
    }

    handleOnClick = () => {
        this.props.onClick(this.props.id);
    };

    render(){
        let className = "studyProgram" + this.props.id;
        return (
            <label onClick={this.handleOnClick} className={className}>{this.props.name}</label>
        );
    }
}
export default StudyProgram;
