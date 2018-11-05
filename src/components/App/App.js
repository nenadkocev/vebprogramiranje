import React, { Component } from 'react';
import './App.css';
import {listStudents} from '../../repository/studentRepository';
import StudentsList from '../StudentsList/studentsList';
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";
import CreateStudent from "../CreateStudent/CreateStudent";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students :listStudents(),
        visible: false,
        index: 0
    };
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onNewStudentSubmit = this.onNewStudentSubmit.bind(this);
  }

  onClick(index){
    if(this.state.visible){
      this.setState({
          visible: false,
          index: 0
      });
    }
    else {
      this.setState({
          visible: true,
          index: index
      });
    }
  }

  onSubmit(student){
      let list = this.state.students
          .map(s => {
            if(s.index === this.state.index)
              return student;
            return s;
          });
    this.setState({
       students : list,
       visible: false
    });
  }

  onNewStudentSubmit(student){
      let list = this.state.students;
      this.setState({
          students: [...list, student]
      });
  }


  render() {
    return (
      <div className="App">
        <StudentsList students={this.state.students} onClick={this.onClick}/>
        <EditStudentDetails visible={this.state.visible} onSubmit={this.onSubmit}/>
          <CreateStudent onSubmit={this.onNewStudentSubmit}/>
      </div>
    );
  }
}

export default App;
