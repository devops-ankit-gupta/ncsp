package com.app.controller;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.app.pojos.Job;
import com.app.service.IJobService;

@CrossOrigin(origins = "*")
//http://localhost:3000
@RestController
@RequestMapping("/api/Jobs")
public class JobController {

	@Autowired
	private  IJobService jobService;
	
	public JobController() {
		
		System.out.println("in ctor of " + getClass());
	}
	
	
	@PostMapping
	public Job addJobDetails(@RequestBody Job j) {
		 
		System.out.println("in add emp "+j);
		return jobService.addNewJob(j);
		
	}
	
	@GetMapping
	public List<Job> getAllJobDetails(){
		
		System.out.println("in get all jobs");
		return jobService.getAllJobs();
		
	}
	
	
	
	@GetMapping("/{skill}")
	public Job getJobDetailsBySkill(@PathVariable String skill) {
		
		System.out.println("in skill methods");
		
		return jobService.getJobName(skill);
		
	}
	
	
	
	@DeleteMapping("/{id}")
	public String deleteJobById(@PathVariable Integer id) {
		
		jobService.getJobById(id);
		
		
		return "deleted";
		
	}
	
	

	
	
	
	
	
	
	@GetMapping("/edit/{Id}")
	public ResponseEntity<?> getJobDetails(@PathVariable int Id) {
		System.out.println("in get job dtls " + Id);
	//	try {
			// invoke service layer's method
			return new ResponseEntity<>(jobService.fetchJobDetails(Id), HttpStatus.OK);
//		} catch (RuntimeException e) {
//			System.out.println("err in get emp dtls " + e);
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//		}

	}

	
	@PutMapping("/put")
	public Job updateJobDetails(@RequestBody   Job e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add job " + e);
		return jobService.addOrUpdateEmployeeDetails(e);
	}
	
	
	

	@GetMapping("/get/{jobDiscription}")
	public List<Job>getApplyDetails(@PathVariable String jobDiscription) {
		System.out.println("in applicant details methods");
		return jobService.getDetail(jobDiscription);		
		
	}
	
	
	
	
	
	
	
	
}
