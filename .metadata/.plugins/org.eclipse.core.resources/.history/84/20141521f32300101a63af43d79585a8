package com.app.dao;

import com.app.pojos.NewsletterEmail;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface NewsletterEmailRepository extends JpaRepository<NewsletterEmail, Long> {
    Optional<NewsletterEmail> findByEmail(String email);
}
