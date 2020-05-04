package com.zpi.salesmanagementsystem.repositories;

import com.zpi.salesmanagementsystem.models.SaleTax;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleTaxRepository extends JpaRepository<SaleTax, Long> {
    SaleTax findByStateName(String stateName);
}