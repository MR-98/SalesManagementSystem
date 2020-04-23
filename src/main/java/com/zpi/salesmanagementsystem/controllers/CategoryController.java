package com.zpi.salesmanagementsystem.controllers;


import com.zpi.salesmanagementsystem.models.Category;
import com.zpi.salesmanagementsystem.repositories.CategoryRepository;
import com.zpi.salesmanagementsystem.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService){
        this.categoryService = categoryService;
    }

    @GetMapping("/categories")
    public List<Category> getAllCategory(){
        return this.categoryService.getAllCategory();
    }

    @PostMapping("/categories")
    public void addCategory(@RequestBody Category category){
        this.categoryService.addCategory(category);
    }

    @PutMapping("/categories")
    public void editCategory(@RequestBody Category category){
        this.categoryService.editCategory(category);
    }

}
