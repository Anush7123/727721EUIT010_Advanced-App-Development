package com.connect.connect.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Boathousebooking")
public class Addentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name",nullable = false)
    private String name;

    @Column(name = "Boathousename",nullable = false)
    private String boathousename;

    @Column(name = "Phonenumber",nullable = false)
    private int phonenumber;
    @Column(name = "Location",nullable = false)
    private String location;



}