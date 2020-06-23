package com.zpi.salesmanagementsystem.services;

import com.zpi.salesmanagementsystem.models.Product;
import com.zpi.salesmanagementsystem.repositories.ProductRepository;
import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.lang.*;

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

    public List<Product> getAllProductsInCategory(Long categoryId) {
        List<Product> productList = IterableUtils.toList(this.productRepository.findAll());
        return productList.stream().filter(p -> p.getCategory().getId() == categoryId).collect(Collectors.toList());
    }

    public Product addProduct(Product product) {
        this.categoryService.addProductToCategory(product);
        this.productRepository.save(product);
        return product;
    }

    public void editProduct(Product product) {
        this.productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Product product = this.productRepository.findById(id).orElseThrow();
        this.categoryService.removeProductFromCategory(product);
        this.productRepository.deleteById(id);
    }

    public List<Double> getAveragePriceInCategory() {
        List<Double> averagePriceList = new ArrayList<>();
        List<Product> products = getAllProducts();
        for(long i = 1; i < 7; i++){
            double sum = 0;
            double numberOfProducts = 0;
            for(int j = 0; j < products.size(); j++){
                if(products.get(j).getCategory().getId() == i){
                    sum += products.get(j).getBasePrice();
                    numberOfProducts++;
                }
            }
            if ((Double.isNaN(sum / numberOfProducts))) {
                averagePriceList.add(0.0);
            } else {
                averagePriceList.add(sum / numberOfProducts);
            }
        }
        return averagePriceList;
    }
}
