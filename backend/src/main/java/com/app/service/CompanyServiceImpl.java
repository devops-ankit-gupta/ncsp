package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ComAuthRepo;
import com.app.dao.CompanyRepository;
import com.app.dao.FeedbackRepo;
import com.app.pojos.Applicant;
import com.app.pojos.Company;
import com.app.pojos.Feedback;

@Service
@Transactional
public class CompanyServiceImpl implements ICompanyService{

	@Autowired
	public CompanyRepository newApply;
	
	@Autowired
	public FeedbackRepo feedback;
	
	@Autowired
	public ComAuthRepo com;
	@Override
	public Applicant AddApplicant(Applicant b) {
		// TODO Auto-generated method stub
		return newApply.save(b);
	}


	@Override
	public List<Applicant> getDetails(String applyingForJob) {
		// TODO Auto-generated method stub
		return newApply.applyingForTheJob(applyingForJob);
	}


	@Override
	public List<Applicant> getAllApplicant() {
		// TODO Auto-generated method stub
		return newApply.findAll();
	}


	@Override
	public Applicant addOrUpdateDetails(Applicant a) {
		// TODO Auto-generated method stub
		return newApply.save(a);
	}


	@Override
	public Company addCompany(Company c) {
		// TODO Auto-generated method stub
		return com.save(c);
	}


	@Override
	public Company authenticateUser(String em, String pass) {
		// TODO Auto-generated method stub
		return com.findByEmailAndPassword(em, pass)
				.orElseThrow(() -> new RuntimeException("User login failed : Invalid Credentials"))	;
	
	}


	@Override
	public List<Company> getAllCompany() {
		// TODO Auto-generated method stub
		return com.findAll();
	}


	@Override
	public Integer updateStatus(int id,String a) {
		// TODO Auto-generated method stub
		return com.updateCompanyStatus(id,a);
	}


	@Override
	public String getCompanyById(Integer id) {
		// TODO Auto-generated method stub
		 com.deleteById(id);
		 return "ok deleted";
	}


	@Override
	public Feedback addFeedback(Feedback s) {
		// TODO Auto-generated method stub
		return feedback.save(s);
	}


	@Override
	public Feedback getSelected(String firstName) {
		// TODO Auto-generated method stub
		Feedback f=feedback.findByFirstName(firstName).orElseThrow(() -> new RuntimeException("failed : Invalid Credentials"));
		
		return f ;
	}

}
//findByApplyingForJob(applyingForJob).orElseThrow(() -> new RuntimeException("No job found skill " +applyingForJob));