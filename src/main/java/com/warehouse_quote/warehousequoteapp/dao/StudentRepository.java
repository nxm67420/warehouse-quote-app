package com.warehouse_quote.warehousequoteapp.dao;

import com.warehouse_quote.warehousequoteapp.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {


}
