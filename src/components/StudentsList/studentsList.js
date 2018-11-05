import React  from 'react';
import StudentItem from '../StudentItem/StudentItem';


const studentsList = (props) => {
    let student = props.students.map(student => {
        return (
              <StudentItem key={student.index} student={student} onClick={props.onClick}/>
        );
    });
    return(
        <table className="table">
            <thead className="thead-light">
            <tr >
                <th>
                    Име
                </th>
                <th>
                    Презиме
                </th>
            </tr>
            </thead>
            <tbody>
            {student}
            </tbody>
        </table>
    )
};
export default studentsList;

