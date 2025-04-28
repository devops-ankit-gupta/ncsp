package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Applicant;

import com.app.pojos.User;

public interface IUserService {

	 Optional <User> findById(int id);
	 
	User authenticateUser(String email,String pass); 
	
	User addUserDetails(User transientUser);
	
	 User getApplicantDetails(String firstName);
	 
	 User authenticateEmail(String em);
	 
	 Integer updatePasswordWithEmail(String pass,String em);
	 
	  String getUser(Integer firstName);
	  
	  List<User> getAllUser();
	
}
