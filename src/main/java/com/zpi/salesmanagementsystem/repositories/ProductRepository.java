package com.zpi.salesmanagementsystem.repositories;

import com.zpi.salesmanagementsystem.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
