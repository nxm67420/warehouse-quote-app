import React, {useEffect, useState} from 'react';
import StudentService from "../services/StudentService";
import {Link} from 'react-router-dom'

const ListStudentComponent = () => {

    const [student, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return(
        <div className="container">
            <h2 className="text-center"> List of Students</h2>
            <nav>
                <Link to="/saveStudent" className="btn btn-primary mb-2">Add Student</Link>
            </nav>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Seniority</th>
                    <th>Level</th>
                    <th>Major</th>
                </thead>
                <tbody>
                    {
                        student.map( student =>
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.age}</td>
                                    <td>{student.seniority}</td>
                                    <td>{student.level}</td>
                                    <td>{student.major}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
};

export default ListStudentComponent;