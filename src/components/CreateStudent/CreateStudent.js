import React from 'react';

class CreateStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastName: "",
            index: "",
            studyProgram: "",
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
                lastName: e.target.value
            })
        };

        const handleIndexChange = (e) => {
            this.setState({
                index: e.target.value
            })
        };

        const handleClassChange = (e) => {
            console.log(e.target.value);
            this.setState({
                studyProgram: e.target.value
            })
        };


        const handleFormSubmit = (e) => {
            const student = {
              name: this.state.name,
                lastName: this.state.lastName,
                index: this.state.index,
                studyProgram: this.state.studyProgram,
            };
            this.setState({
               name: "",
                lastName: "",
               index: "",
                studyProgram: ""
            });
            this.props.onSubmit(student);
        };

        let nasoki = this.props.nasoki.map(n => {
            return (
                <div key={n.id}>
                    <input type="radio" value={n.name} name="nasoka"/>
                    {n.name}
                </div>
            );
        });


        return(
            <form onSubmit={handleFormSubmit}>
                Име
                <input type="text" onChange={handleNameChange} value={this.state.name}/>
                Презиме
                <input type="text" onChange={handleSurnameChange} value={this.state.lastName}/>
                Индекс
                <input type="text" onChange={handleIndexChange} value={this.state.index}/>
                {/*Насока*/}
                {/*<input type="text" onChange={handleClassChange} value={this.state.studyProgram}/>*/}

                <fieldset onChange={handleClassChange}>
                    {nasoki}
                </fieldset>
                <input type="submit" className="btn" value="Внеси нов студент"/>
            </form>
        );
    }
}

export default CreateStudent;