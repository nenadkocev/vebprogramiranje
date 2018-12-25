import React, { Component } from 'react';
import {addNewStudyProgramApi, deleteStudyProgramApi, getStudyProgramsFromApi} from "../../repository/studyProgramsApi";
import StudyProgramsList from "../StudyProgramList/StudyProgramList"
import CreateStudyProgram from "../CreateStudyProgram/CreateStudyProgram";

class studyProgramsApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            programs: [],
            status : 200
        };
    }

    isDeleteOk = (response) => {
        console.log(response);
        this.setState({
            status: response.status
        })
    };

    onNewStudyProgram = (studyProgram) => {
        addNewStudyProgramApi(studyProgram);
    };

    deleteStudyProgram = (id) => {
      deleteStudyProgramApi(id, this.isDeleteOk);
        let newList = this.state.programs.filter(p => p.id !== id);
        this.setState({
            programs : newList
        })
    };

    render(){
        if(this.state.status !== 200){
            return <h1>ERROR {this.state.status}</h1>
        }
        else{
            return(
                <div style={{margin: '10px'}}>
                    <h1>Study Programs</h1>
                    <StudyProgramsList deleteProgram={this.deleteStudyProgram} programs = {this.state.programs}/>
                    <CreateStudyProgram onSubmit={this.onNewStudyProgram}/>
                </div>
            );
        }
    }

    componentDidMount(){
        getStudyProgramsFromApi()
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    programs : myJson
                });
            });
    }
}

export default studyProgramsApp;