import React, { Component } from 'react';
import './App.css';
import StudentsList from '../StudentsList/studentsList';
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";
import CreateStudent from "../CreateStudent/CreateStudent";
import {getStudentsFromApi, postStudent, putStudent} from "../../repository/studentsApi";
import {getStudyProgramsFromApi} from "../../repository/studyProgramsApi";

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onNewStudentSubmit = this.onNewStudentSubmit.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.state = {
        students : [],
        nasoki : [],
        student : {
            name : "",
            lastName: "",
            index: "",
            studyProgram: ""
        }
      }
  }


    getStudents = () => {
    getStudentsFromApi()
    .then(response => response.json())
            .then(myJson => {
                let s = myJson.length === 0 ? "" : myJson[0];
                this.setState({
                    students : myJson,
                    visible: false,
                    index: 0,
                    student: s
                });
            });
    };

  getStudyPrograms = () => {
      getStudyProgramsFromApi()
          .then(response => response.json())
          .then(myJson => {
              this.setState({
                  nasoki: myJson
              });
          });
  };

  onClick(index){
      let student1 = this.state.students
          .filter(s => s.index === index);
      this.setState({
          visible: true,
          index: index,
          student: student1[0]
      });
  }

  onSubmit(student){
    //   let list = this.state.students
    //       .map(s => {
    //         if(s.index === this.state.index)
    //           return student;
    //         return s;
    //       });
    // this.setState({
    //    students : list,
    //    visible: false
    // });
      putStudent(student);
  }

  onNewStudentSubmit(student){
      // let list = this.state.students;
      // this.setState({
      //     students: [...list, student]
      // });
      postStudent(student);
  }

    componentDidMount(){
        this.getStudents();
        this.getStudyPrograms();
    }

  render() {
    return (
            <div className="App">
                <StudentsList students={this.state.students} onClick={this.onClick}/>
                <EditStudentDetails student={this.state.student} visible={this.state.visible} onSubmit={this.onSubmit}/>
                <CreateStudent onSubmit={this.onNewStudentSubmit} nasoki = {this.state.nasoki}/>
            </div>
    );
  }
}

export default App;
