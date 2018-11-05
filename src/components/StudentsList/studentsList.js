import React  from 'react';
import StudentItem from '../StudentItem/StudentItem';
import ReactPaginate from 'react-paginate';


class StdeuntsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageNum: 0,
            pageSize: 3
        };
    }

    render(){

        // getTasksPage = (offset, nextPageOffset) => {
        //     return this.props.tasks
        //         .map((task, index) => {
        //             return <Task task={task}
        //                          key={index}
        //                          startWork={this.props.startStop}
        //                          index={index}/>
        //         })
        //         // the filter is after the map function, so that the index attribute in map function is not reset for each page
        //         .filter((task, index) => {
        //             return index >= offset
        //                 && index < nextPageOffset;
        //         });
        // };


        const getStudentsPage = (offset, nextPageOffset) => {
            return this.props.students
                .map((student, index) => {
                    return <StudentItem key={student.index} student={student} onClick={this.props.onClick}/>
                })
                .filter((task, index) => {
                    return index >= offset && index < nextPageOffset;
                });
        };

        const offset = this.state.pageNum * this.state.pageSize;
        const nextPageOffset = offset + this.state.pageSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pageSize);
        const tasks = getStudentsPage(offset, nextPageOffset);
        

    }
}


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

