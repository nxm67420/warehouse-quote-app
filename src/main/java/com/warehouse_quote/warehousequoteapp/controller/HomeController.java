package com.warehouse_quote.warehousequoteapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HomeController {
    @GetMapping("/api/home")
    public String home() {

        return new Date() + "\n";
    }
}