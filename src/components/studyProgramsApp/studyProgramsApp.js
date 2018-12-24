import React, { Component } from 'react';
import {addNewStudyProgramApi, getStudyProgramsFromApi} from "../../repository/studyProgramsApi";
import StudyProgramsList from "../StudyProgramList/StudyProgramList"
import CreateStudyProgram from "../CreateStudyProgram/CreateStudyProgram";

class studyProgramsApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            programs: []
        };
    }

    onNewStudyProgram = (studyProgram) => {
        addNewStudyProgramApi(studyProgram);
    };

    render(){
        return(
            <div style={{margin: '10px'}}>
                <h1>Study Programs</h1>
                <StudyProgramsList programs = {this.state.programs}/>
                <CreateStudyProgram onSubmit={this.onNewStudyProgram}/>
            </div>
        );
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