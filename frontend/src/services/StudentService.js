//API Service Calls
import axios from 'axios';

const STUDENT_REST_API_URL = 'http://localhost:8080/api/findAllStudents';

class StudentService {

    getAllStudents(){
        return axios.get(STUDENT_REST_API_URL);
    }
}

export default new StudentService;