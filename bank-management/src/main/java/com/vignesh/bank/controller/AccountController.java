package com.vignesh.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.vignesh.bank.entity.Account;
import com.vignesh.bank.service.AccountService;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "https://bank-management-system-kappa.vercel.app")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @GetMapping("/{id}")
    public Account getAccount(@PathVariable Long id) {
        return accountService.getAccount(id);
    }

    @PutMapping("/{id}/deposit")
    public Account deposit(@PathVariable Long id,
                           @RequestParam Double amount) {
        return accountService.deposit(id, amount);
    }

    @PutMapping("/{id}/withdraw")
    public Account withdraw(@PathVariable Long id,
                            @RequestParam Double amount) {
        return accountService.withdraw(id, amount);
    }

    @PutMapping("/transfer")
    public String transfer(@RequestParam Long fromId,
                           @RequestParam Long toId,
                           @RequestParam Double amount) {
        accountService.transfer(fromId, toId, amount);
        return "Transfer successful";
    }
}



