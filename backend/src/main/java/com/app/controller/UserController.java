package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Applicant;
import com.app.pojos.Job;
import com.app.pojos.User;
import com.app.service.IUserService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/User")
public class UserController {
	
	@Autowired
	private IUserService user;

	public UserController() {
		
		System.out.println("in ctor of " + getClass());
	}
	
	/*
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetailsById(@PathVariable int id){
		return new ResponseEntity<>(user.findById(id),HttpStatus.OK);
	}
	*/
	
	@PostMapping("/auth")
	public User loginUser(@RequestBody User a) {
		User u=null;
		
		String em=a.getEmail();
		String pass=a.getPassword();
		if(em!=null && pass!=null ) {
			 u=user.authenticateUser(em, pass);
			
		}
		if(u!=null) {
			return u;
		}else {
			return null;
		}
		
	}
	
	
	@PostMapping("/add")
	public User addUser(@RequestBody User u) {
		
		
		return user.addUserDetails(u);
	}
	
	
	@GetMapping("/{firstName}")
	public User getApplicantDetailsByFirstName(@PathVariable String firstName) {
		System.out.println("in applicant details methods");
		return user.getApplicantDetails(firstName);
		
		
	}
	
	

	
	
	
	@PostMapping("/forget")
	public Integer forgetPassword(@RequestBody User u) {
		
		User a=null;
		String pass=u.getPassword();
		System.out.println(pass);
		
		String em=u.getEmail();
		System.out.println(em);
		
		if(pass!=null && em!=null) {
			
		 a=user.authenticateEmail(em);
		 System.out.println("email varified");
		 return user.updatePasswordWithEmail(pass,em);
		 
		}else {
			
			return null;
		}
					
	}
	
	
	
	@DeleteMapping("/delete/{id}")
	public String deleteJobByfirstName(@PathVariable Integer id) {
		
		user.getUser(id);
		
		
		return "deleted";
		
	}
	
	
	

	@GetMapping("/all")
	public List<User> getAllJobDetails(){
		
		System.out.println("in get all user");
		return user.getAllUser();
		
	}
			
	
	
}
