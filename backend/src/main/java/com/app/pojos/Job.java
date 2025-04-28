package com.app.pojos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "Job_tbl")

public class Job extends BaseEntity {
	
	@Column(length = 20)
	private String occupationTittle;
	@Column(length = 20)
	private String numberOfEmloyeesRequired;
	@Column(length = 20)
	private Double salary;
	@Column(length = 20)
	private String durationOfEmployment;
	@Column(length = 20)
	private String workExperienceRequired;
	@Column(length = 20)
	private String jobDiscription;
	@Column(length = 20)
	private String preferedSex;
	@Column(length = 20)
	private String vacancyAvailable;
	@Column(length = 20)
	private LocalDate postingDate;
	@Column(length = 20)
	private String skill;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Applicant_id", nullable = true)	
	private Applicant applicant;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="Company_id",nullable=true)
	private Company companyRef;
	
	

	public Job() {
		super();
	}
	

	public Job(String occupationTittle, String numberOfEmloyeesRequired, Double salary, String durationOfEmployment,
			String workExperienceRequired, String jobDiscription, String preferedSex, String vacancyAvailable,
			LocalDate postingDate, String skill) {
		super();
		this.occupationTittle = occupationTittle;
		this.numberOfEmloyeesRequired = numberOfEmloyeesRequired;
		this.salary = salary;
		this.durationOfEmployment = durationOfEmployment;
		this.workExperienceRequired = workExperienceRequired;
		this.jobDiscription = jobDiscription;
		this.preferedSex = preferedSex;
		this.vacancyAvailable = vacancyAvailable;
		this.postingDate = postingDate;
		this.skill = skill;
	}












	@Override
	public String toString() {
		return "Job [occupationTittle=" + occupationTittle + ", numberOfEmloyeesRequired=" + numberOfEmloyeesRequired
				+ ", salary=" + salary + ", durationOfEmployment=" + durationOfEmployment + ", workExperienceRequired="
				+ workExperienceRequired + ", jobDiscription=" + jobDiscription + ", preferedSex=" + preferedSex
				+ ", vacancyAvailable=" + vacancyAvailable + ", postingDate=" + postingDate + ", skill=" + skill + "]";
	}












	public Company getCompany() {
		return companyRef;
	}





	public void setCompany(Company company) {
		this.companyRef = company;
	}





	public String getOccupationTittle() {
		return occupationTittle;
	}

	public void setOccupationTittle(String occupationTittle) {
		this.occupationTittle = occupationTittle;
	}

	public String getNumberOfEmloyeesRequired() {
		return numberOfEmloyeesRequired;
	}

	public void setNumberOfEmloyeesRequired(String numberOfEmloyeesRequired) {
		this.numberOfEmloyeesRequired = numberOfEmloyeesRequired;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public String getDurationOfEmployment() {
		return durationOfEmployment;
	}

	public void setDurationOfEmployment(String durationOfEmployment) {
		this.durationOfEmployment = durationOfEmployment;
	}

	public String getWorkExperienceRequired() {
		return workExperienceRequired;
	}

	public void setWorkExperienceRequired(String workExperienceRequired) {
		this.workExperienceRequired = workExperienceRequired;
	}

	public String getJobDiscription() {
		return jobDiscription;
	}

	public void setJobDiscription(String jobDiscription) {
		this.jobDiscription = jobDiscription;
	}

	public String getPreferedSex() {
		return preferedSex;
	}

	public void setPreferedSex(String preferedSex) {
		this.preferedSex = preferedSex;
	}

	public String getVacancyAvailable() {
		return vacancyAvailable;
	}

	public void setVacancyAvailable(String vacancyAvailable) {
		this.vacancyAvailable = vacancyAvailable;
	}

	public LocalDate getPostingDate() {
		return postingDate;
	}

	public void setPostingDate(LocalDate postingDate) {
		this.postingDate = postingDate;
	}

	public Applicant getApplicant() {
		return applicant;
	}

	public void setApplicant(Applicant applicant) {
		this.applicant = applicant;
	}





	public String getSkill() {
		return skill;
	}





	public void setSkill(String skill) {
		this.skill = skill;
	}





	
	
	
	
	
	
	
	
	
	
	
	

}
