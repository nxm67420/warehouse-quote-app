package com.warehouse_quote.warehousequoteapp.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Student")
public class Student{

    @Id
    private String id;

    private int age;
    private String firstName;
    private String lastName;
    private String level;
    private String major;
    private String seniority;

    public Student(){}

    public Student(String firstName, String lastName, int age, String level, String major, String seniority) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.level = level;
        this.major = major;
        this.seniority = seniority;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getSeniority() {
        return seniority;
    }

    public void setSeniority(String seniority) {
        this.seniority = seniority;
    }

    @Override
    public String toString() {
        return "Student{" +
                "age=" + age +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", level='" + level + '\'' +
                ", major='" + major + '\'' +
                ", seniority='" + seniority + '\'' +
                '}';
    }
}
