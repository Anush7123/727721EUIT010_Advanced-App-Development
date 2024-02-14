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
@Table(name = "Registration")
public class Enqentity {
    // public Enqentity(Long id2, String firstname2, String lastname2, String fathername2, String mothername2, int age2,
    //         int phonenumber2, int gender2, String address2) {
    //     //TODO Auto-generated constructor stub
    // }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name",nullable = false)
    private String name;

    @Column(name = "Email",nullable = false)
    private String email;

    @Column(name = "Phonenumber",nullable = false)
    private int phonenumber;

    @Column(name = "Numberofdays",nullable = false)
    private String numberofdays;

    @Column(name = "Numberofpersons",nullable = false)
    private String numberofpersons;

}