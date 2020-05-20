package com.zpi.salesmanagementsystem.controllers;

import com.zpi.salesmanagementsystem.models.Product;
import com.zpi.salesmanagementsystem.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts(@RequestParam(value="categoryId", required = false) Long categoryId){
        if(categoryId != null) {
            return this.productService.getAllProductsInCategory(categoryId);
        }
        return this.productService.getAllProducts();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return this.productService.addProduct(product);
    }

    @PutMapping
    public void editProduct(@RequestBody Product product){
        this.productService.editProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        this.productService.deleteProduct(id);
    }
}
