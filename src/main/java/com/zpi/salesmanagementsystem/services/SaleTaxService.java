package com.zpi.salesmanagementsystem.services;

import com.zpi.salesmanagementsystem.models.SaleTax;
import com.zpi.salesmanagementsystem.repositories.SaleTaxRepository;
import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleTaxService {

    private SaleTaxRepository saleTaxRepository;

    @Autowired
    public SaleTaxService(SaleTaxRepository saleTaxRepository) {
        this.saleTaxRepository = saleTaxRepository;
    }

    public List<SaleTax> getAll() {
        return IterableUtils.toList(this.saleTaxRepository.findAll());
    }

    public double getSaleTaxByStateAndCategoryName(String state, String categoryName, Double productPrice) {
        SaleTax saleTax = this.saleTaxRepository.findByStateName(state);

        // Sale tax exceptions
        if (saleTax.getStateName().equals("Massachusetts") && categoryName.equals("Clothing") && productPrice > 175) {
            return 0.0625;
        } else if (saleTax.getStateName().equals("New York") && categoryName.equals("Clothing") && productPrice > 110) {
            return 0.04;
        } else if (saleTax.getStateName().equals("Rhode Island") && categoryName.equals("Clothing") && productPrice > 250) {
            return 0.07;
        }

        switch (categoryName) {
            case "Groceries":
                return saleTax.getGroceries();
            case "Prepared food":
                return saleTax.getPreparedFood();
            case "Prescription drug":
                return saleTax.getPrescriptionDrug();
            case "Non prescription drug":
                return saleTax.getNonPrescriptionDrug();
            case "Clothing":
                return saleTax.getClothing();
            case "Intangibles":
                return saleTax.getIntangibles();
            default:
                return 0;
        }
    }
}
