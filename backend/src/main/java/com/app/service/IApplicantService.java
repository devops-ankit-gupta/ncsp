package com.app.service;

import com.app.pojos.Applicant;


public interface IApplicantService {

	 Applicant getDetail(String firstName);
	 
	 String getApp(Integer id);
	 
}
