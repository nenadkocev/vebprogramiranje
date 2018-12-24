import React  from 'react';
import StudyProgram from '../StudyProgram/StudyProgram'

const studyProgramsList = (props) => {
    let programs = props.programs.map(program => {
        return (
            <tr className="row" key={program.id}>
                <td>
                    <StudyProgram key={program.id} name = {program.name} onClick={props.onClick}/>
                </td>
            </tr>
        );
    });
    return(
        <table className="table">
            <thead className="thead-light">
            <tr >
                <th>
                    Име на програма
                </th>
            </tr>
            </thead>
            <tbody>
            {programs}
            </tbody>
        </table>
    )
};
export default studyProgramsList;