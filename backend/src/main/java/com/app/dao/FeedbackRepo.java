package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Feedback;
import com.app.pojos.User;



public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {

	Optional<Feedback> findByFirstName(String firstName);
	
	
}
