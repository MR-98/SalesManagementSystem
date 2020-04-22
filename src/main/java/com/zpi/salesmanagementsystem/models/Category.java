package com.zpi.salesmanagementsystem.models;


import javax.persistence.*;
import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int quantityOfProducts;

    /*@OneToMany(fetch = FetchType.LAZY)
    private List<Product> products;*/

    protected Category(){
    }
    private Category(String name){
        this.name = name;
        this.quantityOfProducts = 0;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantityOfProducts() {
        return quantityOfProducts;
    }

    public void setQuantityOfProducts(int quantityOfProducts) {
        this.quantityOfProducts = quantityOfProducts;
    }
}
