package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import com.app.dao.UserRepository;
import com.app.pojos.Applicant;

import com.app.pojos.User;
@Service 
@Transactional

public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;
	
	
	@Override
	public Optional<User> findById(int id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id);
	}


	@Override
	public User authenticateUser(String email, String pass) {
		
		return userRepo.findByEmailAndPassword(email, pass)
				.orElseThrow(() -> new RuntimeException("User login failed : Invalid Credentials"))	;
	}


	@Override
	public User addUserDetails(User transientUser) {
		// TODO Auto-generated method stub
		return userRepo.save(transientUser);
	}


	@Override
	public User getApplicantDetails(String firstName) {
		// TODO Auto-generated method stub
		
		User user=userRepo.findByFirstName(firstName).orElseThrow(() -> new RuntimeException("No User found  " +firstName));
		
		return user;
	}


	@Override
	public User authenticateEmail(String em) {
		// TODO Auto-generated method stub
		return userRepo.findByEmail(em).orElseThrow(() -> new RuntimeException("User login failed : Invalid Credentials"));
	}


	@Override
	public Integer updatePasswordWithEmail(String pass,String em) {
		// TODO Auto-generated method stub
		return userRepo.updatePassword(pass,em);
	}


	@Override
	public String getUser(Integer id) {
		// TODO Auto-generated method stub
		userRepo.deleteById(id);
		
		return "user deleted";
	}


	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}
	
	
	


	
}
