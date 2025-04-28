package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.app.pojos.Contact;
import com.app.service.ContactService;

@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
@RestController
@RequestMapping("/api/Contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/add")
    public Contact addContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}
