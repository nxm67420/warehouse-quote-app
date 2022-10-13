//API Service Calls
import axios from 'axios';

const STUDENT_REST_API_URL = 'http://localhost:8080/api/students';

class StudentService {

    //GET
    getAllStudents(){
        return axios.get(STUDENT_REST_API_URL);
    }

    //POST
    createStudent(student){
        return axios.post(STUDENT_REST_API_URL + "/saveStudent" , student)
    }


}

export default new StudentService();