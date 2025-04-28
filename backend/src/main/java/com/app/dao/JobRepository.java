package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Job;

public interface JobRepository extends JpaRepository<Job,Integer> {

	
	//get job by skill
	Optional<Job> findBySkill(String skill);
	
	 @Query("select new com.app.pojos.Job(occupationTittle,numberOfEmloyeesRequired,salary,durationOfEmployment,workExperienceRequired,jobDiscription,preferedSex,vacancyAvailable,postingDate,skill) from  Job u  where u.jobDiscription=:p")
	  Optional<Job>jobDiscription( @Param("p")String jobDiscription);
	 
	

}
