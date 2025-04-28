package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Applicant;
import com.app.pojos.User;


public interface ApplicantRepository extends JpaRepository<Applicant,Integer> {

	
	Optional<Applicant>   findByFirstName(String applyingForJob);
	
}
