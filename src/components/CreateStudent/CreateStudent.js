import React from 'react';

class CreateStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname: "",
            index: "",
            class: ""
        };
    }


    render(){
        const handleNameChange = (e) => {
          this.setState({
              name: e.target.value
          })
        };

        const handleSurnameChange = (e) => {
            this.setState({
                surname: e.target.value
            })
        };

        const handleIndexChange = (e) => {
            this.setState({
                index: e.target.value
            })
        };

        const handleClassChange = (e) => {
            this.setState({
                class: e.target.value
            })
        };

        const handleFormSubmit = (e) => {
            const student = {
              name: this.state.name,
                surname: this.state.surname,
                index: this.state.index,
                class: this.state.class,

            };
            this.setState({
               name: "",
               surname: "",
               index: "",
               class: ""
            });
            this.props.onSubmit(student);
            e.preventDefault();
        };

        return(
            <form onSubmit={handleFormSubmit}>
                Име
                <input type="text" onChange={handleNameChange} value={this.state.name}/>
                Презиме
                <input type="text" onChange={handleSurnameChange} value={this.state.surname}/>
                Индекс
                <input type="text" onChange={handleIndexChange} value={this.state.index}/>
                Насока
                <input type="text" onChange={handleClassChange} value={this.state.class}/>
                <input type="submit" className="btn" value="Внеси нов студент"/>
            </form>
        );
    }
}

export default CreateStudent;