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


    const getStudentsPage = (offset, nextPageOffset) => {
        
    }

    render(){
        const offset = this.state.pageNum * this.state.pageSize;
        const nextPageOffset = offset + this.state.pageSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pageSize);
        const tasks = this.getStudentsPage(offset, nextPageOffset);


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

