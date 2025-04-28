package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Applicant;
import com.app.pojos.Company;
import com.app.pojos.Feedback;
import com.app.pojos.User;
import com.app.service.ICompanyService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/Company")
public class CompanyController {

	@Autowired
	private ICompanyService companyService;
	
	public CompanyController() {
		
		System.out.println("in ctor of " + getClass());
	}

	@PostMapping("/add")
	public Applicant applyForJob(@RequestBody Applicant a ) {
		
		return companyService.AddApplicant(a);
	}
	
	@GetMapping("/{applyingForJob}")
	
	 public List<Applicant>  getAppliedApplicant(@PathVariable String applyingForJob) {
		
		System.out.println("in getAppliedApplicant methods"+applyingForJob);
		
		return companyService.getDetails(applyingForJob);
	}
	
	
	@GetMapping 
	public List<Applicant> getAllApplicant(){
		
		return companyService.getAllApplicant();
	}
	
	
	@PutMapping("/put")
	public Applicant updateApplicantDetails(@RequestBody   Applicant e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add job " + e);
		return companyService.addOrUpdateDetails(e);
	}
	
	
	@PostMapping("/added")
	public Company addCompany(@RequestBody Company c) {
		
		Company d=companyService.addCompany(c);
		int i=d.getId();
		String s="NOTAPPROVED";
		companyService.updateStatus(i,s);
		
		return d;
	}
	
	@PostMapping("/auth")
	public Company loginCompany(@RequestBody Company a) {
		Company c=null;
		String em=a.getEmail();
		String pass=a.getPassword();
		System.out.println(em+""+pass);
		if(em!=null && pass!=null ) {
			 c=companyService.authenticateUser(em, pass);
			
		}
		
		
		if(c!=null) {
			return c;
		}else {
			return null;
		}
		
		
	}
	
	@GetMapping("/getAll")
	public List<Company> getAllDetails(){
		
		System.out.println("in get all jobs");
		return companyService.getAllCompany();
		
	}
	
	
	@GetMapping("/approve/{id}/{status}")
	public Integer approve(@PathVariable int id,@PathVariable String status) {
		
		
		System.out.println(status);
		String a="NOTAPPROVED";
		String b="APPROVED";
		if(a.equalsIgnoreCase(status)) {
		return companyService.updateStatus(id,b);
		}else {
			
			return companyService.updateStatus(id,a);
		}
		
	}
	
	
	@DeleteMapping("/del/{id}")
public String deleteCompanyById(@PathVariable Integer id) {
		
		companyService.getCompanyById(id);
		
		
		return "deleted";
		
	}
	
	
	@PostMapping("/feedback")
	
	
public Feedback addUser(@RequestBody Feedback s) {
		
	
		  
		
		
		Feedback f=companyService.addFeedback(s);
		
		
		return f;
	}
	
	
	
	
	@GetMapping("/selected/{firstName}")
	public Feedback getSelectedCandidate(@PathVariable String firstName) {
		System.out.println("in applicant details methods");
		return companyService.getSelected(firstName);
		
		
	}
	
	
	
	
}
