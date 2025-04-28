package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.dao.JobRepository;
import com.app.pojos.Job;

@Service
@Transactional

public class JobServiceImpl implements IJobService {
	@Autowired
	private JobRepository newJob;
	
	
	@Override
	public Job addNewJob(Job transientJob) {
		// TODO Auto-generated method stub
		return newJob.save(transientJob);
	}


	@Override
	public List<Job> getAllJobs() {
		// TODO Auto-generated method stub
		return newJob.findAll();
	}


	@Override
	public Job getJobName(String skill) {
		// TODO Auto-generated method stub
		Job job=newJob.findBySkill(skill).orElseThrow(() -> new RuntimeException("No job found skill " +skill));
		
		
		return job;
	}


	@Override
	public String getJobById(Integer id) {
		
		newJob.deleteById(id);
		
		return "ok deleted";
		
		
	}


	@Override
	public Job fetchJobDetails(int id) {
		// TODO Auto-generated method stub
		return  newJob.findById(id).orElseThrow(() -> new RuntimeException("No User found  " +id));
		
	}


	@Override
	public Job addOrUpdateEmployeeDetails(Job transientJob) {
		// TODO Auto-generated method stub
		return newJob.save(transientJob);
	}


    @Override
	public List<Job> getDetail(String jobDiscription) {
		// TODO Auto-generated method stub
		return (List<Job>) newJob.jobDiscription(jobDiscription).orElseThrow(() -> new RuntimeException("No User found  " +jobDiscription));
	}

}
