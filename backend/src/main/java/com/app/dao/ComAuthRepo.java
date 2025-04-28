package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Company;


public interface ComAuthRepo extends JpaRepository<Company,Integer>{

	
	
	Optional <Company>findByEmailAndPassword(String em, String pass);
	
	@Modifying 
	@Query("Update Company c set c.companyStatus=:e where c.id=:p")
	Integer  updateCompanyStatus(@Param("p") int id,@Param("e") String a);
}
