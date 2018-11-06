    import React from 'react';

    class EditStudentDetails extends React.Component{
        constructor(props){
            console.log("edit constructor called");
            super(props);
            this.state = {
                name: this.props.student.name,
                surname: this.props.student.surname,
                index : this.props.student.index,
                class : this.props.student.class,
                visible: this.props.visible
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
        }

        componentWillReceiveProps(nextProps){
            this.setState({
                name: nextProps.student.name,
                surname: nextProps.student.surname,
                index : nextProps.student.index,
                class : nextProps.student.class,
                visible: nextProps.visible
            });
        }


        handleSubmit(e){
            if(!this.state.name.length ||
                !this.state.surname.length ||
                !this.state.class.length ||
                !this.state.index.length){
                e.preventDefault();
                return;
            }
            const student = {
                name: this.state.name,
                surname: this.state.surname,
                index : this.state.index,
                class : this.state.class
            };
            this.props.onSubmit(student);
            e.preventDefault();
        }

        handleInputChange(e){
            this.setState({
               [e.target.name] : e.target.value
            });
        }

        render(){
            const type = this.props.visible ? {display: 'block'} : {display: 'none'} ;
            return(
                <div style={type}>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        Име
                        <input name="name" type="text" onChange={this.handleInputChange} value={this.state.name}/>
                        Презиме
                        <input name="surname" type="text" onChange={this.handleInputChange} value={this.state.surname}/>
                        Индекс
                        <input name="index" type="text" onChange={this.handleInputChange} value={this.state.index}/>
                        Насока
                        <input name="class" type="text" onChange={this.handleInputChange} value={this.state.class}/>
                        <input className="submit btn" type="submit" value="Промени"/>
                    </form>
                </div>
            );
        }
    }

    export default EditStudentDetails;