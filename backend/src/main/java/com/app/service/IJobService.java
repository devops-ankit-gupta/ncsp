package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.pojos.Job;



public interface IJobService {

	Job addNewJob(Job transientJob);
	
	List<Job> getAllJobs();
	
	Job getJobName(String skill);
	
 String getJobById(Integer id);
 
 Job fetchJobDetails(int id);
 
 Job addOrUpdateEmployeeDetails(Job transientJob);
   List<Job> getDetail(String jobDiscription);
}
