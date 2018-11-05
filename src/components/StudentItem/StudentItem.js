import React from 'react';

class StudentItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            student: props.student
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.props.onClick(this.state.student.index);
    }

    render(){
        return(
            <tr onClick={this.handleOnClick}>
                <td>{this.state.student.name}</td>
                <td>{this.state.student.surname}</td>
            </tr>
        );
    }
}

export default StudentItem;