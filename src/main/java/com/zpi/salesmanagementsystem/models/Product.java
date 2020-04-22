package com.zpi.salesmanagementsystem.models;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private double basePrice;

    //@ManyToOne(fetch = FetchType.LAZY)
   // private Category category;

    public Product(){}

    public Product(String name, double basePrice){
        this.name = name;
        this.basePrice = basePrice;
        //this.category = category;
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

    public double getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(double basePrice) {
        this.basePrice = basePrice;
    }
/*
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }*/
}
