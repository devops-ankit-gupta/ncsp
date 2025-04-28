package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ApplicantRepository;
import com.app.pojos.Applicant;
import com.app.pojos.User;

@Service 
@Transactional


public class ApplicantServiceImpl implements IApplicantService {

	@Autowired
	private ApplicantRepository appRepo;

	@Override
	public Applicant getDetail(String firstName) {
		// TODO Auto-generated method stub

		Applicant a=appRepo.findByFirstName(firstName).orElseThrow(() -> new RuntimeException("No User found  " +firstName));
		
		return a;
	}

	@Override
	public String getApp(Integer id) {
		// TODO Auto-generated method stub
		appRepo.deleteById(id);
		return "APP DELETED";
	}

	//applyingForJob

	
	
}
