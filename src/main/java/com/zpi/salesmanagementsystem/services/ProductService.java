package com.zpi.salesmanagementsystem.services;

import com.zpi.salesmanagementsystem.models.Product;
import com.zpi.salesmanagementsystem.repositories.ProductRepository;
import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;
    private CategoryService categoryService;

    @Autowired
    public ProductService(ProductRepository productRepository, CategoryService categoryService){
        this.productRepository = productRepository;
        this.categoryService = categoryService;
    }

    public List<Product> getAllProducts(){
        return IterableUtils.toList(this.productRepository.findAll());
    }

    public void addProduct(Product product) {
        this.categoryService.addProductToCategory(product);
        this.productRepository.save(product);
    }

    public void editProduct(Product product) {
        this.productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = this.productRepository.findById(id).orElseThrow();
        this.categoryService.removeProductFromCategory(product);
        this.productRepository.deleteById(id);
    }
}
