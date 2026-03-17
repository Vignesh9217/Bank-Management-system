package com.vignesh.bank.service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vignesh.bank.entity.Account;
import com.vignesh.bank.repository.AccountRepository;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Account getAccount(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));
    }

public Account deposit(Long id, Double amount) {
    Account account = accountRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Account not found"));

    account.setBalance(account.getBalance() + amount);

    return accountRepository.save(account);
}

public Account withdraw(Long id, Double amount) {

    Account account = accountRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Account not found"));

    if (account.getBalance() < amount) {
        throw new RuntimeException("Insufficient balance");
    }

    account.setBalance(account.getBalance() - amount);

    return accountRepository.save(account);
}

@Transactional
public void transfer(Long fromId, Long toId, Double amount) {

    Account fromAccount = accountRepository.findById(fromId)
            .orElseThrow(() -> new RuntimeException("Sender not found"));

    Account toAccount = accountRepository.findById(toId)
            .orElseThrow(() -> new RuntimeException("Receiver not found"));

    if (fromAccount.getBalance() < amount) {
        throw new RuntimeException("Insufficient balance");
    }

    fromAccount.setBalance(fromAccount.getBalance() - amount);
    toAccount.setBalance(toAccount.getBalance() + amount);

    accountRepository.save(fromAccount);
    accountRepository.save(toAccount);
}
}


