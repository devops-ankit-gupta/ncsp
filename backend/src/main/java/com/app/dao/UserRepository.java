package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Modifying;

import com.app.pojos.Applicant;
import com.app.pojos.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User,Integer> {

	Optional<User>  findByEmailAndPassword(String email,String pwd);
	
	Optional<User>   findByFirstName(String firstName);
	
	Optional<User> findByEmail(String em);
	
	
	@Modifying 
	@Query("Update User u set u.password=:p where u.email=:e")
	Integer updatePassword(@Param("p") String pass,@Param("e") String em);
	
}
