import React, { Component } from 'react';


class StudyProgram extends Component{
    constructor(props){
        super(props);
    }

    handleOnClick = () => {
        this.props.onClick(this.props.id);
    };

    deleteStudyProgram = (e) => {
        this.props.deleteProgram(e.target.value);
    };

    render(){
        let className = "studyProgram" + this.props.id;
        return (
            <span>
                <label className={className}>{this.props.name}</label>
                <button style={{marginLeft: "10px"}} className="btn" onClick={this.deleteStudyProgram} value={this.props.id}>Избриши</button>

            </span>
        );
    }
}
export default StudyProgram;
