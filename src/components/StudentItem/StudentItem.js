import React from 'react';

class StudentItem extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.props.onClick(this.props.student.index);
    }

    render(){
        return(
            <div onClick = {this.handleOnClick}>>
                <span>
                    {this.props.student.name}
                </span>
                <span>
                    {this.props.student.lastName}
                </span>
            </div>
        );
    }
}

export default StudentItem;