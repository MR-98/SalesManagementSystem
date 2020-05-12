package com.zpi.salesmanagementsystem.controllers;

import com.zpi.salesmanagementsystem.services.SaleTaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calculator")
public class SaleTaxController {

    private SaleTaxService saleTaxService;

    @Autowired
    public SaleTaxController(SaleTaxService saleTaxService) {
        this.saleTaxService = saleTaxService;
    }

    @RequestMapping("/{state}/{categoryName}")
    public double getSaleTaxByStateAndCategoryName(@PathVariable String state, @PathVariable String categoryName) {
        return this.saleTaxService.getSaleTaxByStateAndCategoryName(state, categoryName);
    }
}
