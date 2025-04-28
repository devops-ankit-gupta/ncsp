package com.app.service;

import com.app.dao.NewsletterEmailRepository;
import com.app.pojos.NewsletterEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsletterEmailService {

    @Autowired
    private NewsletterEmailRepository newsletterEmailRepository;

    public String subscribe(String email) {
        if (newsletterEmailRepository.findByEmail(email).isPresent()) {
            return "already_subscribed";
        }
        newsletterEmailRepository.save(new NewsletterEmail(email));
        return "subscribed";
    }
}
