package com.app.pojos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String yourName;
    private String email;
    private String mobileNumber;
    private String message;

    // Constructors
    public Contact() {}

    public Contact(String yourName, String email, String mobileNumber, String message) {
        this.yourName = yourName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.message = message;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getYourName() { return yourName; }
    public void setYourName(String yourName) { this.yourName = yourName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
