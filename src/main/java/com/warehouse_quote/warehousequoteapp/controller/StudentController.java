package com.warehouse_quote.warehousequoteapp.controller;

import com.warehouse_quote.warehousequoteapp.dao.StudentRepository;
import com.warehouse_quote.warehousequoteapp.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentRepository repository;

    @PostMapping("/addStudent")
    public String saveStudent(@RequestBody Student student){
        Student newStudent = new Student(
                student.getFirstName(),
                student.getLastName(),
                student.getAge(),
                student.getLevel(),
                student.getSeniority(),
                student.getMajor()
        );
        repository.save(newStudent);
        return "Added Student : " + newStudent.getFirstName() + ", " + newStudent.getLastName();
    }


    /*
    @PutMapping("/edit/{id}")
    public Student update(@RequestBody Student student, @PathVariable String id){
        Optional<Student> optionalStudent = repository.findById(student.getId());
        if(optionalStudent.isPresent()){
            repository.save(student);
        }
        return student;
    }
    */

    //Works
    @GetMapping("/findAllStudents")
    public List<Student> getStudents(){
        return repository.findAll();
    }

    @GetMapping("/findAllStudents/{id}")
    public Optional<Student> getStudent(@PathVariable String id){
        return repository.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable String id){
        repository.deleteById(id);
        return "Student Deleted : " + id;
    }
}
