    import React from 'react';

    class EditStudentDetails extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                name: this.props.student.name,
                lastName: this.props.student.lastName,
                index : this.props.student.index,
                studyProgram : this.props.student.studyProgram,
                visible: this.props.visible
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
        }

        componentWillReceiveProps(nextProps){
            this.setState({
                name: nextProps.student.name,
                lastName: nextProps.student.lastName,
                index : nextProps.student.index,
                studyProgram : nextProps.student.studyProgram,
                visible: nextProps.visible
            });
        }


        handleSubmit(e){
            if(!this.state.name.length ||
                !this.state.lastName.length ||
                !this.state.studyProgram.length ||
                !this.state.index.length){
                e.preventDefault();
                return;
            }
            const student = {
                name: this.state.name,
                lastName: this.state.lastName,
                index : this.state.index,
                studyProgram : this.state.studyProgram
            };
            this.props.onSubmit(student);
            e.preventDefault();
        }

        handleInputChange(e){
            const value = e.target.value;
            const name = [e.target.name];
            this.setState({
               [name] : value
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
                        <input name="lastName" type="text" onChange={this.handleInputChange} value={this.state.lastName}/>
                        Индекс
                        <input name="index" type="text" onChange={this.handleInputChange} value={this.state.index}/>
                        Насока
                        <input name="studyProgram" type="text" onChange={this.handleInputChange} value={this.state.studyProgram}/>
                        <input className="submit btn" type="submit" value="Промени"/>
                    </form>
                </div>
            );
        }
    }

    export default EditStudentDetails;