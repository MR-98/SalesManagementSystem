package com.zpi.salesmanagementsystem.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    
    @RequestMapping("/")
    public String getHelloWorld() {
        return "Hello world";
    }
}
