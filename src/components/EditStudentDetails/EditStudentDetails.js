import React from 'react';

class EditStudentDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname: "",
            index : "",
            class : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleIndexChange = this.handleIndexChange.bind(this);
    }

    handleSubmit(e){
        const student = {
            name: this.state.name,
            surname: this.state.surname,
            index: this.state.index,
            class: this.state.class
        };
        this.props.onSubmit(student);
        e.preventDefault();
    }

    // let handleSubmit = (e) => {
    //     const student = {
    //         name: this.state.name,
    //         surname: this.state.surname,
    //         index: this.state.index,
    //         class: this.state.class
    //     };
    //     this.props.onSubmit(student);
    //     e.preventDefault();
    // }

    handleNameChange(e){
        const newName = e.target.value;
        this.setState({
           name: newName
        });
    }

    handleSurnameChange(e){
        const newName = e.target.value;
        this.setState({
            surname: newName
        });
    }

    handleIndexChange(e){
        const newIndex = e.target.value;
        this.setState({
            index: newIndex
        });
    }

    handleClassChange(e){
        const newClass = e.target.value;
        this.setState({
            class: newClass
        });
    }

    render(){
        const type = this.props.visible ? {display: 'block'} : {display: 'none'} ;
        return(
            <div style={type}>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    Име
                    <input className="Name" type="text" onChange={this.handleNameChange}/>
                    Презиме
                    <input className="Surname" type="text" onChange={this.handleSurnameChange}/>
                    Индекс
                    <input className="Index" type="text" onChange={this.handleIndexChange}/>
                    Насока
                    <input className="Class" type="text" onChange={this.handleClassChange}/>
                    <input className="submit btn" type="submit" value="Промени"/>
                </form>
            </div>
        );
    }
}

export default EditStudentDetails;