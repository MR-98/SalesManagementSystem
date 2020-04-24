package com.zpi.salesmanagementsystem.controllers;


import com.zpi.salesmanagementsystem.models.Category;
import com.zpi.salesmanagementsystem.repositories.CategoryRepository;
import com.zpi.salesmanagementsystem.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService){
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getAllCategory(){
        return this.categoryService.getAllCategory();
    }

    @PostMapping
    public void addCategory(@RequestBody Category category){
        this.categoryService.addCategory(category);
    }

    @PutMapping
    public void editCategory(@RequestBody Category category){
        this.categoryService.editCategory(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable("id") Long id) {
        this.categoryService.deleteCategory(id);
    }

}
