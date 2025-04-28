package com.app.controller;

import com.app.service.NewsletterEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "http://localhost:3000")
public class NewsletterEmailController {

    @Autowired
    private NewsletterEmailService newsletterEmailService;

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody EmailRequest emailRequest) {
        String result = newsletterEmailService.subscribe(emailRequest.getEmail());

        if (result.equals("already_subscribed")) {
            return ResponseEntity.status(409).body("Already Subscribed");
        }
        return ResponseEntity.ok("Subscribed Successfully!");
    }
}

class EmailRequest {
    private String email;

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
