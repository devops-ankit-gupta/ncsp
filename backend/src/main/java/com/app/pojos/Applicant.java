
package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Applicant_tbl")
public class Applicant extends BaseEntity {
	
	
	


	@Column(length = 20)
	private String firstName;
	@Column(length = 20)
	private String lastName;
	@Column(length = 20)
	private String  sex;
	@Column(length = 20)
	private String maritalStatus;	
	
	@Column(length = 20)
	private String email;
	
	@Column(length = 50)
	private String experience;
	
	@Column(length = 50)
	private String interestedFields;
	
	@Column(length = 20)
	private String graduationMarks;
	
	@Column(length = 20)
	private String passoutYear;
	
	@Column(length = 20)
	private String qualification;
	
	@Column(length = 20)
	private String university;
	
	@Column(length = 20)
	private String applyingForJob;
	
	
	
	//@JsonManagedReference
	@OneToMany(mappedBy = "applicant", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER  ) 
	private List<Job> appliedJobs = new ArrayList<>();
	
	
	
	
	
	


	public Applicant() {
		super();
	}
	


	

	
	
	
	public Applicant(String firstName, String lastName, String sex, String maritalStatus, String email,
			String experience, String interestedFields, String graduationMarks, String passoutYear,
			String qualification, String university, String applyingForJob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.sex = sex;
		this.maritalStatus = maritalStatus;
		this.email = email;
		this.experience = experience;
		this.interestedFields = interestedFields;
		this.graduationMarks = graduationMarks;
		this.passoutYear = passoutYear;
		this.qualification = qualification;
		this.university = university;
		this.applyingForJob = applyingForJob;
	}





	











	public String getQualification() {
		return qualification;
	}








	public void setQualification(String qualification) {
		this.qualification = qualification;
	}








	public String getUniversity() {
		return university;
	}








	public void setUniversity(String university) {
		this.university = university;
	}









	
	
	
	
	
	
	
	
	
	


	public String getFirstName() {
		return firstName;
	}






	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}






	public String getLastName() {
		return lastName;
	}






	public void setLastName(String lastName) {
		this.lastName = lastName;
	}






	public String getSex() {
		return sex;
	}






	public void setSex(String sex) {
		this.sex = sex;
	}






	public String getMaritalStatus() {
		return maritalStatus;
	}






	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}






	public String getEmail() {
		return email;
	}






	public void setEmail(String email) {
		this.email = email;
	}






	public String getExperience() {
		return experience;
	}






	public void setExperience(String experience) {
		this.experience = experience;
	}






	public String getInterestedFields() {
		return interestedFields;
	}






	public void setInterestedFields(String interestedFields) {
		this.interestedFields = interestedFields;
	}






	public String getGraduationMarks() {
		return graduationMarks;
	}






	public void setGraduationMarks(String graduationMarks) {
		this.graduationMarks = graduationMarks;
	}






	public String getPassoutYear() {
		return passoutYear;
	}






	public void setPassoutYear(String passoutYear) {
		this.passoutYear = passoutYear;
	}






	public String getApplyingForJob() {
		return applyingForJob;
	}






	public void setApplyingForJob(String applyingForJob) {
		this.applyingForJob = applyingForJob;
	}






	public List<Job> getAppliedJobs() {
		return appliedJobs;
	}






	public void setAppliedJobs(List<Job> appliedJobs) {
		this.appliedJobs = appliedJobs;
	}


	
	
	
	
	











	@Override
	public String toString() {
		return "Applicant [firstName=" + firstName + ", lastName=" + lastName + ", sex=" + sex + ", maritalStatus="
				+ maritalStatus + ", email=" + email + ", experience=" + experience + ", interestedFields="
				+ interestedFields + ", graduationMarks=" + graduationMarks + ", passoutYear=" + passoutYear
				+ ", qualification=" + qualification + ", university=" + university + ", applyingForJob="
				+ applyingForJob + "]";
	}








	public void addJob(Job s) {
		
		appliedJobs.add(s);
		
		s.setApplicant(this);
		
	}
	
	public void removeJob(Job s) {
		
		appliedJobs.remove(s);
		s.setApplicant(null);
	}

	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Applicant other = (Applicant) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		return true;
	}
	
	

	
	
}
