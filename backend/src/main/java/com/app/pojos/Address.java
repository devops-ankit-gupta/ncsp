package com.app.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="Address")
public class Address extends BaseEntity {
	@Column(length = 20)
	private String city;
	
	@Column(length = 20)
	private String state;
	
	@Column(length = 20)
	private String pin;
	
	@Column(length = 20)
	private String contactNumber;
	
	@OneToOne
	@JoinColumn(name="Applicant_id",nullable = false)
	@MapsId
	private Applicant applicant;
	
	public Address() {
		super();
	}

	public Address(String city, String state, String pin, String contactNumber) {
		super();
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.contactNumber = contactNumber;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	
	
	

	public Applicant getApplicant() {
		return applicant;
	}

	public void setApplicant(Applicant applicant) {
		this.applicant = applicant;
	}

	@Override
	public String toString() {
		return "Address [city=" + city + ", state=" + state + ", pin=" + pin + ", contactNumber=" + contactNumber + "]";
	}
	
	
	
	
	
	
	
	
}
