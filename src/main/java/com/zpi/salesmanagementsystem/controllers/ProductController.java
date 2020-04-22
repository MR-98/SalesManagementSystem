package com.zpi.salesmanagementsystem.controllers;

import com.zpi.salesmanagementsystem.models.Product;
import com.zpi.salesmanagementsystem.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return this.productService.getAllProducts();
    }

    @PostMapping("/products")
    public void addProduct(@RequestBody Product product){
        this.productService.addProduct(product);
    }
}
