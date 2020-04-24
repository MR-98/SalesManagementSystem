package com.zpi.salesmanagementsystem.services;

import com.zpi.salesmanagementsystem.models.Category;
import com.zpi.salesmanagementsystem.models.Product;
import com.zpi.salesmanagementsystem.repositories.CategoryRepository;
import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategory(){
        return IterableUtils.toList(this.categoryRepository.findAll());
    }

    public void addCategory(Category category){
        this.categoryRepository.save(category);
    }
    public void editCategory(Category category) {
        this.categoryRepository.save(category);
    }

    public void deleteCategory(Long id) {
        this.categoryRepository.deleteById(id);
    }

    public void addProductToCategory(Product product) {
        Category category = this.categoryRepository.findById(product.getCategory().getId()).orElseThrow();
        category.getProducts().add(product);
        this.categoryRepository.save(category);
    }

    public void removeProductFromCategory(Product product) {
        Category category = this.categoryRepository.findById(product.getCategory().getId()).orElseThrow();
        category.getProducts().remove(product);
        this.categoryRepository.save(category);
    }
}
