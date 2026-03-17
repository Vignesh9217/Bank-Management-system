package com.vignesh.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vignesh.bank.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}