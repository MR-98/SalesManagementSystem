package com.zpi.salesmanagementsystem.services;

import com.zpi.salesmanagementsystem.models.Category;
import com.zpi.salesmanagementsystem.models.Product;
import com.zpi.salesmanagementsystem.repositories.ProductRepository;
import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(){
        return IterableUtils.toList(this.productRepository.findAll());
    }

    public void addProduct(Product product){
        this.productRepository.save(product);
    }

    public void editProduct(Product product) {
        this.productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        this.productRepository.deleteById(id);
    }
}
