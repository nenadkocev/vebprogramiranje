import React  from 'react';
import StudentItem from '../StudentItem/StudentItem';
import ReactPaginate from 'react-paginate';


class StudentsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageNum: 0,
            pageSize: 3
        };
    }

    render(){
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
        const students = getStudentsPage(offset, nextPageOffset);

        const handlePageClick = (data) => {
            let selected = data.selected;

            this.setState({pageNum: selected});
        };


        return (
            <div className="col-md-12">
                {students}
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>
            </div>
        );


    }
}
export default StudentsList;

