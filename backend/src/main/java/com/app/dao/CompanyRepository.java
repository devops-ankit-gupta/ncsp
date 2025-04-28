package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Applicant;


public interface CompanyRepository extends JpaRepository<Applicant,Integer> {

	@Query("SELECT  new Applicant(u.firstName,u.lastName,u.sex,u.maritalStatus,u.email,u.experience,u.interestedFields,u.graduationMarks,u.passoutYear,u.passoutYear,u.university,u.applyingForJob) from  Applicant u  where u.applyingForJob=:p")
	public List <Applicant> applyingForTheJob( @Param("p") String a);
	
	
}
