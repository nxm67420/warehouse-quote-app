package com.warehouse_quote.warehousequoteapp.controller;

import com.warehouse_quote.warehousequoteapp.dao.StudentRepository;
import com.warehouse_quote.warehousequoteapp.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    @Autowired
    private StudentRepository repository;

    @PostMapping("/addStudent")
    public String saveStudent(@RequestBody Student student){
        repository.save(student);
        return "Added Student : " + student.getFirstName() + ", " + student.getLastName();
    }

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
