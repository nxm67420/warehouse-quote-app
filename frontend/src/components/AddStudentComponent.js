import React, {useState} from 'react'
import StudentService from "../services/StudentService";
import {useNavigate} from 'react-router-dom';

const AddStudentComponent = () => {

    const[firstName, setFirstName] = useState(" ");
    const[lastName, setLastName] = useState(" ");
    const[age, setAge] = useState( " ");
    const[level, setLevel] = useState(" ");
    const[major, setMajor] = useState(" ");
    const[seniority, setSeniority] = useState(" ");
    const history = useNavigate();

    const saveStudent = (e) => {
        e.preventDefault();
        const student = {firstName, lastName, age, level, major, seniority};

        StudentService.createStudent(student).then((response) => {
            console.log(response.data);
            history('/students');
        }).catch(error => {
            console.log(error);
        });
        console.log(student);
    };

    return (
        <div>
            <h1>Registration</h1>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"card col-md-6 offset-md-3 offset-md-3"}>
                        <h2 className={"text-center"} style={{color:"green"}}>Student Registration</h2>
                        <div className={"card-body"}>
                            <form>
                                <div className={"form-group mb-2"}>
                                    <label className={"form-label"}>First Name</label>
                                    <input type="text" name="firstName" className="form-control" value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}/>
                                </div>

                                <div className={"form-group mb-2"}>
                                    <label className={"form-label"}>Last Name</label>
                                    <input type="text" name="lastName" className="form-control" value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}/>
                                </div>

                                <div className={"form-group mb-2"}>
                                    <label className={"form-label"}>Age</label>
                                    <input type="text" name="age" className="form-control" value={age}
                                    onChange={(e) => setAge(e.target.value)}/>
                                </div>

                                <div className={"form-group mb-2"}>
                                    <label className={"form-label"}>Graduate or Undergrad</label>
                                    <input type="text" name="level" className="form-control" value={level}
                                    onChange={(e) => setLevel(e.target.value)}/>
                                </div>

                                <div className={"form-group mb-2"}>
                                    <label className={"form-label"}>Major</label>
                                    <input type="text" name="major" className="form-control" value={major}
                                    onChange={(e) => setMajor(e.target.value)}/>
                                </div>

                                <div className={"form-group mb-2"}>
                                    <label className={"form-label"}>Seniority</label>
                                    <input type="text" name="seniority" className="form-control" value={seniority}
                                    onChange={(e) => setSeniority(e.target.value)}/>
                                </div>

                                <button className={"btn btn-success"} onClick = {(e) => saveStudent(e)}>register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddStudentComponent;