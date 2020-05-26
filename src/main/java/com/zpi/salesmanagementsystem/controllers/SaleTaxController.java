package com.zpi.salesmanagementsystem.controllers;

import com.zpi.salesmanagementsystem.models.SaleTax;
import com.zpi.salesmanagementsystem.services.SaleTaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calculator")
public class SaleTaxController {

    private SaleTaxService saleTaxService;

    @Autowired
    public SaleTaxController(SaleTaxService saleTaxService) {
        this.saleTaxService = saleTaxService;
    }

    @GetMapping
    public List<SaleTax> getAll() {
        return this.saleTaxService.getAll();
    }

    @RequestMapping("/{state}/{categoryName}")
    public double getSaleTaxByStateAndCategoryName(@PathVariable String state, @PathVariable String categoryName, @RequestParam(value="productPrice", required = false) Double productPrice) {
        return this.saleTaxService.getSaleTaxByStateAndCategoryName(state, categoryName, productPrice == null ? 0 : productPrice);
    }
}
