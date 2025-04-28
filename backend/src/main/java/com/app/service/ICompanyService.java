package com.app.service;

import java.util.List;

import com.app.pojos.Applicant;
import com.app.pojos.Company;
import com.app.pojos.Feedback;

public interface ICompanyService {

	Applicant AddApplicant(Applicant b);
	
	
	public List<Applicant> getDetails(String applyingForJob);
	
	public List<Applicant> getAllApplicant();
	Applicant addOrUpdateDetails(Applicant a);
	
	Company addCompany(Company c);
	Company authenticateUser(String em, String pass);
	
	List<Company>getAllCompany();
	
	Integer updateStatus(int id,String a);
	
	String getCompanyById(Integer id);
	
	Feedback addFeedback(Feedback s);
	
	Feedback getSelected(String firstName);
	
}
