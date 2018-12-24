import React from 'react';

class CreateStudyProgram extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    handleNameChange = (e) => {
        this.setState({
           name: e.target.value
        });
    };

    handleFormSubmit = () => {
        const program = {
          name : this.state.name
        };
        this.setState({
            name: ""
        });

        this.props.onSubmit(program);
    };

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
                <input type="submit" className="btn" value="Додади студиска програма"/>
            </form>
        );
    }
}

export default CreateStudyProgram;