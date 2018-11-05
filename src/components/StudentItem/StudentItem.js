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
            <div onClick = {this.handleOnClick}>>
                <span>
                    {this.state.student.name}
                </span>
                <span>
                    {this.state.student.surname}
                </span>
            </div>
        );
    }
}
//
// {/*<tr onClick={this.handleOnClick}>*/}
// {/*<td>{this.state.student.name}</td>*/}
// {/*<td>{this.state.student.surname}</td>*/}
// {/*</tr>*/}

export default StudentItem;