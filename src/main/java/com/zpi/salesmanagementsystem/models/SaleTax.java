package com.zpi.salesmanagementsystem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SaleTax {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stateName;

    private double groceries;

    private double preparedFood;

    private double prescriptionDrug;

    private double nonPrescriptionDrug;

    private double clothing;

    private double intangibles;

    public SaleTax() {
    }

    public SaleTax(String stateName, double groceries, double preparedFood, double prescriptionDrug, double nonPrescriptionDrug, double clothing, double intangibles) {
        this.stateName = stateName;
        this.groceries = groceries;
        this.preparedFood = preparedFood;
        this.prescriptionDrug = prescriptionDrug;
        this.nonPrescriptionDrug = nonPrescriptionDrug;
        this.clothing = clothing;
        this.intangibles = intangibles;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public double getGroceries() {
        return groceries;
    }

    public void setGroceries(double groceries) {
        this.groceries = groceries;
    }

    public double getPreparedFood() {
        return preparedFood;
    }

    public void setPreparedFood(double preparedFood) {
        this.preparedFood = preparedFood;
    }

    public double getPrescriptionDrug() {
        return prescriptionDrug;
    }

    public void setPrescriptionDrug(double prescriptionDrug) {
        this.prescriptionDrug = prescriptionDrug;
    }

    public double getNonPrescriptionDrug() {
        return nonPrescriptionDrug;
    }

    public void setNonPrescriptionDrug(double nonPrescriptionDrug) {
        this.nonPrescriptionDrug = nonPrescriptionDrug;
    }

    public double getClothing() {
        return clothing;
    }

    public void setClothing(double clothing) {
        this.clothing = clothing;
    }

    public double getIntangibles() {
        return intangibles;
    }

    public void setIntangibles(double intangibles) {
        this.intangibles = intangibles;
    }
}