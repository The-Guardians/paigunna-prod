package com.paigunna.api.resource;

import com.paigunna.api.domain.Transaction;
import com.paigunna.api.repo.TransactionRepo;
import com.paigunna.api.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/transaction")
public class TransactionResource {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getAll() {
        return transactionService.getAll();
    }

    @GetMapping("/{id}")
    public Transaction getById(@PathVariable("id") Long id) {
        return transactionService.getById(id);
    }

    @GetMapping("/user/{id}")
    public List<Transaction> findByUser(@PathVariable("id") Long id) {
        return transactionService.getByPassenger(id);
    }

}
