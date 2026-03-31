package com.vignesh.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vignesh.bank.entity.User;
import com.vignesh.bank.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "https://bank-management-system-kappa.vercel.app")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        // If the frontend sends `username` field, it will map to the `name` property here.
        User saved = userRepository.save(user);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return userRepository.findByNameAndPassword(user.getName(), user.getPassword())
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(401).build());
    }
}
